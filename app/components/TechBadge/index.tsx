type TechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className='rounded-lg bg-purple-900/80 px-3 py-1 text-sm text-purple-400'>
      {name}
    </span>
  );
};
