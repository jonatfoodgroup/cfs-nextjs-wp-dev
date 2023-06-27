import Link from "next/link";

const Row = ({ item }) => {
  return (
    <tr>
      <td style={{ width: "50%" }}>
        <Link
          href={`/${item.__typename.toLowerCase()}/${item.slug}`}
          as={`/${item.__typename.toLowerCase()}/${item.slug}`}
        >
          {item.title}
        </Link>
      </td>
      <td>
        {item.__typename.toLowerCase()}/{item.slug}
      </td>
    </tr>
  );
};

export default Row;
