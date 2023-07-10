import { Text } from "../../components";
import { DetailsItemProps } from "../../types";

export default function DetailsItem({
  title,
  value
}: DetailsItemProps) {
  return (
    <Text as="p">
      {title}:
      <Text as="span">{value}</Text>
    </Text>
  );
}