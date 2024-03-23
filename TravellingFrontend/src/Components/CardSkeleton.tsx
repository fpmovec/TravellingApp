import { Skeleton } from "@mui/material"

const CardSkeleton = () => {
    return <div>
    <Skeleton
      variant="rounded"
      width={200}
      height={248}
      animation="wave"
    />
    <Skeleton variant="text" width={200} sx={{ fontSize: "15px" }} animation="wave" />
    <Skeleton
      variant="rounded"
      width={200}
      height={60}
      animation="wave"
    />
  </div>
}

export default CardSkeleton;