import { ReactNode } from "react";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";

export type NegativeCaseVariant =
  | "no-internet"
  | "data-not-found"
  | "under-development"
  | "information-unavailable"
  | "payment-success"
  | "payment-failed"
  | "no-order"
  | "timeout"
  | "on-process"
  | "page-not-found"
  | "page-not-found-v2"
  | "no-seat-available"
  | "change-price"
  | "help-desk"
  | "approved"
  | "rejected"
  | "check-order";

interface NegativeCaseProps {
  variant: NegativeCaseVariant;
  customMessage?: ReactNode;
  reload?: () => void;
  reloadText?: string;
  customImage?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const appErrorConfig: Record<string, { image: string; message: string }> = {
  PAGE_NOT_FOUND: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/page-not-found_20261103043319.svg",
    message: "The page you are looking for does not exist.",
  },
  PAGE_NOT_FOUND_V2: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/page-not-found-v2_20261103043349.svg",
    message: "The page you are looking for does not exist.",
  },
  NO_INTERNET: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/no-internet_20261103043423.svg",
    message: "Please check your internet connection and try again.",
  },
  DATA_NOT_FOUND: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/search-not-found_20261103043503.svg",
    message: "No data available for your request.",
  },
  UNDER_DEVELOPMENT: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/under-development_20261103043531.svg",
    message: "This feature is currently under development.",
  },
  INFORMATION_UNAVAILABLE: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/search-not-found_20261103043503.svg",
    message: "The requested information is currently unavailable.",
  },
  PAYMENT_SUCCESS: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/payment-success_20261103043614.svg",
    message: "Operation completed successfully.",
  },
  PAYMENT_FAILED: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/payment-failed_20261103043650.svg",
    message: "Payment failed. Please try again.",
  },
  NO_ORDER: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/no-order_20261103043718.svg",
    message: "No order found.",
  },
  TIMEOUT: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/timeout_20261103043739.svg",
    message: "Request timed out. Please try again.",
  },
  ON_PROCESS: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/on-process_20261103043758.svg",
    message: "Your request is being processed. Please wait for a moment.",
  },
  NO_SEAT_AVAILABLE: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/seat-not-available_20261103043824.svg",
    message: "No seat available. Please try again later.",
  },
  CHANGE_PRICE: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/change-price_20261103043852.svg",
    message: "The price has been changed. Please try again.",
  },
  HELP_DESK: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/help-desk_20261103043911.svg",
    message: "Please contact our help desk for assistance.",
  },
  APPROVED: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/approved_20261103043930.svg",
    message: "Your request has been approved.",
  },
  REJECTED: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/rejected_20261103043947.svg",
    message: "Your request has been rejected.",
  },
  CHECK_ORDER: {
    image: "https://tixia-bucket.s3.ap-southeast-3.amazonaws.com/seo/facebook_image/check-order_20261103044009.svg",
    message: "Please check your order.",
  },
};

const variantToErrorCode: Record<NegativeCaseVariant, string> = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  "payment-success": "PAYMENT_SUCCESS",
  "payment-failed": "PAYMENT_FAILED",
  "no-order": "NO_ORDER",
  timeout: "TIMEOUT",
  "on-process": "ON_PROCESS",
  "page-not-found": "PAGE_NOT_FOUND",
  "page-not-found-v2": "PAGE_NOT_FOUND_V2",
  "no-seat-available": "NO_SEAT_AVAILABLE",
  "change-price": "CHANGE_PRICE",
  "help-desk": "HELP_DESK",
  approved: "APPROVED",
  rejected: "REJECTED",
  "check-order": "CHECK_ORDER",
};

export const NegativeCase = ({
  variant,
  customMessage,
  reload,
  reloadText = "Try Again",
  customImage,
  width,
  height,
  className = "",
}: NegativeCaseProps) => {
  const errorCode = variantToErrorCode[variant];
  const errorConfig = appErrorConfig[errorCode];

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center gap-4 ${className}`}
    >
      <img
        src={customImage || errorConfig.image}
        alt="Negative case illustration"
        className="max-w-[300px] h-auto"
        style={{ width, height }}
      />
      {customMessage ? (
        typeof customMessage === "string" ? (
          <Text variant="body1" className="m-0">
            {customMessage}
          </Text>
        ) : (
          <div className="m-0">{customMessage}</div>
        )
      ) : (
        <Text variant="body1" className="m-0">
          {errorConfig.message}
        </Text>
      )}
      {reload && (
        <Button onClick={reload} rounded="full" variant="primary" size="md">
          {reloadText}
        </Button>
      )}
    </div>
  );
};
