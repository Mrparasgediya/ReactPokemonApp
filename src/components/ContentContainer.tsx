import { FC, ReactElement } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ContentContainer: FC<{
  children: ReactElement | ReactElement[];
  isLoading?: boolean;
  error?: string;
  loadingText?: string;
}> = ({ children, isLoading, error, loadingText }) => {
  return (
    <div
      className={`min-h-[75vh] ${
        isLoading ? "items-center" : "items-start"
      } app-container mx-auto flex  justify-center`}
    >
      {isLoading ? (
        <LoadingSpinner loadingText={loadingText} />
      ) : error ? (
        <div className="error-text">Error: {error}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default ContentContainer;
