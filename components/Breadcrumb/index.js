import Link from 'next/link';

const BreadCrumb = ({
  currentPath = "",
  items = [],
}) => {
  return (
    <div className="breadcrumb">
      {
        items.map((item, index) => {
          return (
            <span key={index}>
              <Link href={item.path}>
                {item.label}
              </Link>
              {index < items.length - 1 && <span> / </span>}
            </span>
          )
        })
      }
      <span> / {currentPath}</span>
    </div>
  );
}

export default BreadCrumb;