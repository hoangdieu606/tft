import { DataPageKeys } from "@/lib/dataFilter";

interface MetadataContent {
  title: string;
  desc: string;
}

export function getMetadataContent(
  page: DataPageKeys,
  set: string | number,
  patch: string
): MetadataContent {
  const content: Record<string, MetadataContent> = {
    champions: {
      title: `Danh Sách Tướng ĐTCL - Chỉ Số & Kỹ Năng Mới Nhất ĐTCL Mùa ${set} - PATCH ${patch}`,
      desc: `Khám phá toàn bộ danh sách tướng Đấu Trường Chân Lý (TFT) với thông tin chi tiết về chỉ số, kỹ năng, hệ tộc và cách xây dựng đội hình hiệu quả. Cập nhật nhanh chóng theo meta mới nhất!`,
    },
    traits: {
      title: `Tộc Hệ TFT Mùa ${set} - Danh Sách & Hiệu Ứng Chi Tiết - PATCH ${patch}`,
      desc: `Khám phá toàn bộ tộc hệ Đấu Trường Chân Lý (TFT) Mùa ${set} với hiệu ứng chi tiết, cách kết hợp đội hình mạnh nhất và mẹo sử dụng hiệu quả. Cập nhật liên tục theo meta mới nhất!`,
    },
    augments: {
      title: `Nâng Cấp TFT Mùa ${set} - Danh Sách & Cách Chọn Tối Ưu - PATCH ${patch}`,
      desc: `Tổng hợp danh sách Nâng Cấp Rồng Thần TFT Mùa ${set} với hiệu ứng chi tiết và cách lựa chọn tối ưu theo từng đội hình. Cập nhật mới nhất theo meta hiện tại!`,
    },
    items: {
      title: `Trang bị TFT Mùa ${set} - Danh Sách đầy đủ và chi tiết nhất - PATCH ${patch}`,
      desc: `Xem ngay danh sách trang bị Đấu Trường Chân Lý (TFT) Mùa ${set} cùng công thức ghép đồ, chỉ số chi tiết và cách sử dụng hiệu quả. Cập nhật liên tục theo meta mới nhất!`,
    },
    tierlist: {
      title: `Bảng xếp hạng đội hình meta mạnh nhất ĐTCL Mùa ${set} - PATCH ${patch}`,
      desc: `Giới thiệu bảng xếp hạng đội hình meta mạnh nhất ĐTCL Mùa ${set}, được tuyển chọn kỹ lưỡng bởi các chuyên gia Đấu Trường Chân Lý: Dishsoap, nhà vô địch thế giới 2 lần và Frodan, caster kiêm HLV Thách Đấu!`,
    },
    "tierlist-revival": {
      title: `Bảng xếp hạng đội hình meta mạnh nhất ĐTCL Mùa ${set} - PATCH ${patch}`,
      desc: `Giới thiệu bảng xếp hạng đội hình meta mạnh nhất ĐTCL Mùa ${set}, được tuyển chọn kỹ lưỡng bởi các chuyên gia Đấu Trường Chân Lý: Dishsoap, nhà vô địch thế giới 2 lần và Frodan, caster kiêm HLV Thách Đấu!`,
    },
    "tierlist-augments": {
      title: `Bảng xếp hạng Nâng Cấp meta mạnh nhất ĐTCL Mùa ${set} - PATCH ${patch}`,
      desc: `Giới thiệu bảng xếp hạng Nâng Cấp meta mạnh nhất ĐTCL Mùa ${set}, được tuyển chọn kỹ lưỡng bởi các chuyên gia Đấu Trường Chân Lý: Dishsoap, nhà vô địch thế giới 2 lần và Frodan, caster kiêm HLV Thách Đấu!`,
    },
    "tierlist-items": {
      title: `Bảng xếp hạng Trang Bị meta mạnh nhất ĐTCL Mùa ${set} - PATCH ${patch}`,
      desc: `Giới thiệu bảng xếp hạng Trang Bị meta mạnh nhất ĐTCL Mùa ${set}, được tuyển chọn kỹ lưỡng bởi các chuyên gia Đấu Trường Chân Lý: Dishsoap, nhà vô địch thế giới 2 lần và Frodan, caster kiêm HLV Thách Đấu!`,
    },
  };

  return (
    content[page] || {
      title: `TFT Mùa ${set} - Hướng dẫn xây dựng đội hình`,
      desc: `Hướng dẫn xây dựng đội hình, mẹo chơi và thông tin chi tiết về Tướng, Tộc Hệ, Nâng Cấp và Trang Bị trong TFT Mùa ${set}.`,
    }
  );
}
