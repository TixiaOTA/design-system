import { ReactNode } from 'react';
import { Text } from '../../atoms/Text';

export type LoaderVariant = 'flight-light' | 'flight-dark';

interface LoaderProps {
  variant: LoaderVariant;
  customImage?: string;
  customMessage?: ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

const loaderConfig: Record<string, { image: string; message: string }> = {
  'FLIGHT_LIGHT': {
    image: 'https://design-system-eaip.onrender.com/img/flight-loader-light.gif',
    message: 'Loading, please wait...'
  },
  'FLIGHT_DARK': {
    image: 'https://design-system-eaip.onrender.com/img/flight-loader-dark.gif',
    message: 'Loading, please wait...'
  },
};

const variantToLoaderCode: Record<LoaderVariant, string> = {
  'flight-light': 'FLIGHT_LIGHT',
  'flight-dark': 'FLIGHT_DARK',
};

export const Loader = ({
  variant,
  customImage,
  customMessage,
  width = 'w-full',
  height = 'h-full',
  className = '',
}: LoaderProps) => {
  const loaderCode = variantToLoaderCode[variant];
  const config = loaderConfig[loaderCode];

  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center gap-4 ${width} ${height} ${className}`}>
      <img
        src={customImage || config.image}
        alt="Loading animation"
        className="max-w-[200px] h-auto"
      />
      {customMessage ? (
        typeof customMessage === 'string' ? (
          <Text variant="body1" className="m-0">{customMessage}</Text>
        ) : (
          <div className="m-0">{customMessage}</div>
        )
      ) : (
        <Text variant="body1" className="m-0">{config.message}</Text>
      )}
    </div>
  );
};