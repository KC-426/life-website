import classNames from "classnames";

export default function SectionTitleOne({
  subTitle,
  className,
  description,
  align,
  spaceBottom,
  showSubTitle,
  children,
  hideDecoration,
  titleSize,
}) {
  return (
    <div className="section_title_servies">
    <div
      className={`section-title -style1 ${classNames(className)}`}
      style={{
        textAlign: align,
        marginBottom: spaceBottom || "3.125rem",
      }}
    >
      {showSubTitle && <h5>{subTitle}</h5>}
      <h2 style={{ fontSize: titleSize }}>{children}</h2>
      {description && <p>{description}</p>}
      {!hideDecoration && (
        <img 
        style={{
          filter: "hue-rotate(240deg)"
        }}
          src="/assets/images/introduction/IntroductionOne/content-deco.png"
          alt="decoration"
        />
      )}
    </div>
    </div>
  );
}
