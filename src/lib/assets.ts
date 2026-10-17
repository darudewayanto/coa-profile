import type { ImageMetadata } from "astro";

type Glob = Record<string, { default: ImageMetadata }>;

const toMap = (glob: Glob) =>
  Object.fromEntries(
    Object.entries(glob).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]),
  ) as Record<string, ImageMetadata>;

export const eventImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/events/*.jpg", { eager: true }));
export const partnerImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/partners/*.png", { eager: true }));
export const accredImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/accred/*.png", { eager: true }));
export const doodleImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/doodles/*.png", { eager: true }));
