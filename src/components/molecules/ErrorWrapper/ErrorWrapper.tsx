import { ReactNode } from 'react';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';

type ErrorVariant = 
  | 'no-internet'
  | 'data-not-found'
  | 'under-development'
  | 'information-unavailable'
  | 'success'
  | 'checked';

interface ErrorWrapperProps {
  error?: unknown;
  reload?: () => void;
  children?: ReactNode;
  className?: string;
  variant?: ErrorVariant;
}

// HTTP Status Codes with their default messages
const httpErrorConfig: Record<string, { image: string; message: string }> = {
  '400': {
    image: '/img/illustration-server-error.png',
    message: 'Bad request. Please check your input and try again.',
  },
  '401': {
    image: '/img/illustration-restricted-access.png',
    message: 'Please sign in to access this resource.',
  },
  '403': {
    image: '/img/illustration-restricted-access.png',
    message: 'You do not have permission to access this resource.',
  },
  '404': {
    image: '/img/illustration-page-not-found.png',
    message: 'The page you are looking for does not exist.',
  },
  '500': {
    image: '/img/illustration-server-error.png',
    message: 'Something went wrong on our end. Please try again later.',
  },
  '502': {
    image: '/img/illustration-server-error.png',
    message: 'Bad gateway. Our servers are having trouble connecting.',
  },
  '503': {
    image: '/img/illustration-server-error.png',
    message: 'Service unavailable. We are currently performing maintenance.',
  },
  '504': {
    image: '/img/illustration-server-error.png',
    message: 'Gateway timeout. The server took too long to respond.',
  },
};

// Application Specific Errors with their default messages
const appErrorConfig: Record<string, { image: string; message: string }> = {
  'NO_INTERNET': {
    image: '/img/illustration-no-internet.png',
    message: 'Please check your internet connection and try again.',
  },
  'DATA_NOT_FOUND': {
    image: '/img/illustration-data-not-found.png',
    message: 'No data available for your request.',
  },
  'UNDER_DEVELOPMENT': {
    image: '/img/illustration-under-development.png',
    message: 'This feature is currently under development.',
  },
  'INFORMATION_UNAVAILABLE': {
    image: '/img/illustration-information-unavailable.png',
    message: 'The requested information is currently unavailable.',
  },
  'SUCCESS': {
    image: '/img/illustration-ok.png',
    message: 'Operation completed successfully.',
  },
  'CHECKED': {
    image: '/img/illustration-checked.png',
    message: 'All checks have passed successfully.',
  },
};

const variantToErrorCode: Record<ErrorVariant, string> = {
  'no-internet': 'NO_INTERNET',
  'data-not-found': 'DATA_NOT_FOUND',
  'under-development': 'UNDER_DEVELOPMENT',
  'information-unavailable': 'INFORMATION_UNAVAILABLE',
  'success': 'SUCCESS',
  'checked': 'CHECKED',
};

const allErrorConfigs = {
  ...httpErrorConfig,
  ...appErrorConfig,
};

const defaultErrorConfig = {
  image: '/img/illustration-server-error.png',
  message: 'An unexpected error occurred. Our team is currently investigating the issue.',
};

const isValidErrorObject = (error: unknown): error is { code?: string; message?: string } => {
  return (
    typeof error === 'object' &&
    error !== null &&
    ('code' in error || 'message' in error)
  );
};

const ErrorWrapper = ({ error, reload, children, className = '', variant }: ErrorWrapperProps) => {
  // Handle variant-based error
  if (variant) {
    const errorCode = variantToErrorCode[variant];
    const variantConfig = appErrorConfig[errorCode];
    
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-center gap-4 ${className}`}>
        <img 
          src={variantConfig.image} 
          alt="Error illustration" 
          className="max-w-[300px] h-auto"
        />
        <Text variant="body1" className="m-0">
          {variantConfig.message}
        </Text>
        {reload && (
          <Button
            onClick={reload}
            rounded="full"
            variant="primary"
            size="md"
          >
            Try Again
          </Button>
        )}
      </div>
    );
  }

  if (!error) {
    return children ? <>{children}</> : null;
  }

  // Handle malformed error object
  if (!isValidErrorObject(error)) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-center gap-4 ${className}`}>
        <img 
          src={defaultErrorConfig.image} 
          alt="Error illustration" 
          className="max-w-[300px] h-auto"
        />
        <Text variant="body1" className="m-0">
          {defaultErrorConfig.message}
        </Text>
        {reload && (
          <Button
            onClick={reload}
            rounded="full"
            variant="primary"
            size="md"
          >
            Try Again
          </Button>
        )}
      </div>
    );
  }

  const currentErrorConfig = error.code && allErrorConfigs[error.code] 
    ? allErrorConfigs[error.code] 
    : defaultErrorConfig;
    
  const errorMessage = error.message || currentErrorConfig.message;

  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center gap-4 ${className}`}>
      <img 
        src={currentErrorConfig.image} 
        alt="Error illustration" 
        className="max-w-[300px] h-auto"
      />
      <Text variant="body1" className="m-0">
        {errorMessage}
      </Text>
      {reload && (
        <Button
          onClick={reload}
          rounded="full"
          variant="primary"
          size="md"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export { ErrorWrapper };
export type { ErrorWrapperProps, ErrorVariant };
