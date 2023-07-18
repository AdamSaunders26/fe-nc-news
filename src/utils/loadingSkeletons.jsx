import Skeleton from "@mui/material/Skeleton";

export function ArticleOverviewSkeleton() {
  return (
    <div>
      <div>
        <Skeleton height={100} />
        <Skeleton />
        <Skeleton />
      </div>
      <div>
        <Skeleton height={100} />
        <Skeleton />
        <Skeleton />
      </div>
      <div>
        <Skeleton height={100} />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div>
      <Skeleton />
      <Skeleton />
      <Skeleton height={300} />
      <Skeleton />
    </div>
  );
}

export function CommentSkeleton() {
  return (
    <div>
      <div>
        <Skeleton height={100} />
        <Skeleton />
      </div>
      <div>
        <Skeleton height={100} />
        <Skeleton />
      </div>
      <div>
        <Skeleton height={100} />
        <Skeleton />
      </div>
    </div>
  );
}
