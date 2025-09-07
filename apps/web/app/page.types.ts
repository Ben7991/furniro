export type CategoryItemProps = {
  headline: string;
  imagePath: string;
};

export type SetupImageProps = {
  altText: string;
  className?: string;
} & Pick<CategoryItemProps, 'imagePath'>;
