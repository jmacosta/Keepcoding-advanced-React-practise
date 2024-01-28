import LockIconSVG from '../../../../assets/lockIcon.svg?react';

function LockIcon({ iconOptions }) {
  return (
    <LockIconSVG
      fill={iconOptions.fill}
      height={Number(iconOptions.height)}
      width={Number(iconOptions.width)}
      className={iconOptions.class}
    />
  );
}
export default LockIcon;
