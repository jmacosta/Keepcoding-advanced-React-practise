import AtIconSVG from '../../../../assets/atIcon.svg?react';

function AtIcon({ iconOptions }) {
  return (
    <AtIconSVG
      fill={iconOptions.fill}
      height={Number(iconOptions.height)}
      width={Number(iconOptions.width)}
      className={iconOptions.class}
    />
  );
}
export default AtIcon;
