import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
      <Skeleton height="2.5rem" className="my-4" />
    </Box>
  );
};

export default LoadingNewIssuePage;
