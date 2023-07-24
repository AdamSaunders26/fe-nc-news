import Skeleton from "@mui/material/Skeleton";

export function ArticleOverviewSkeleton() {
  return (
    <div className="skeleton">
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
    <div className="skeleton">
      <Skeleton />
      <Skeleton />
      <Skeleton height={300} />
      <Skeleton />
    </div>
  );
}

export function CommentSkeleton() {
  return (
    <div className="comment-skeleton">
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

export function UserSkeleton() {
  return (
    <section className="user-skeleton">
      <Skeleton height={100} />
      <Skeleton variant="rounded" height={100} />
    </section>
  );
}
