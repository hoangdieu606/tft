import { getMetadataContent } from "@/lib/metadataContent";
import { DataPageKeys } from "@/lib/dataFilter";

interface TitleProps {
  page: DataPageKeys;
  set: string | number;
  patch: string;
}

export default function Title({ page, set, patch }: TitleProps) {
  const { title, desc } = getMetadataContent(page, set, patch);

  return (
    <div className="flex flex-col gap-2.5 mb-6">
      <h1 className="text-lg text-gray-300 capitalize">{title}</h1>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  );
}