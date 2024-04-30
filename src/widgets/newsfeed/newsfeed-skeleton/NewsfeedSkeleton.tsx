import { CardGrid, ContentCard } from "@vkontakte/vkui";

import styles from "./NewsfeedSkeleton.module.css";

export function NewsfeedSkeleton() {
  const skeletons = [1, 2, 3];

  return (
    <CardGrid size="l">
      {skeletons.map((skeleton) => (
        <ContentCard key={skeleton} className={styles.skeleton} />
      ))}
    </CardGrid>
  );
}
