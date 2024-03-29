// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for home documents */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = TicketsSliceSlice;
/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the document
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Description used for SEO
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice =
  | HeroSlice
  | TextSlice
  | TicketsSliceSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Description used for SEO
   * - **API ID Path**: page.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroSlice | TextSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * Site TItle field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Global title of the site
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  site_title: prismic.TitleField;
  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}
/**
 * Item in Settings → Navigation
 *
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for the link
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | HomeDocument
  | HomepageDocument
  | PageDocument
  | SettingsDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text displayed adjacent to image
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
  /**
   * Button Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the button
   * - **API ID Path**: hero.items[].button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Button Label field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for the button
   * - **API ID Path**: hero.items[].button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_label: prismic.KeyTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text with rich formatting
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;
/**
 * Primary content in TicketsSlice → Primary
 *
 */
interface TicketsSliceSliceDefaultPrimary {
  /**
   * heading field in *TicketsSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tickets_slice.primary.heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  heading: prismic.KeyTextField;
  /**
   * image field in *TicketsSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tickets_slice.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Item in TicketsSlice → Items
 *
 */
export interface TicketsSliceSliceDefaultItem {
  /**
   * heading field in *TicketsSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tickets_slice.items[].heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  heading: prismic.KeyTextField;
  /**
   * description field in *TicketsSlice → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tickets_slice.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * icon field in *TicketsSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tickets_slice.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismic.ImageField<never>;
}
/**
 * Default variation for TicketsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TicketsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TicketsSliceSliceDefaultPrimary>,
  Simplify<TicketsSliceSliceDefaultItem>
>;
/**
 * Slice variation for *TicketsSlice*
 *
 */
type TicketsSliceSliceVariation = TicketsSliceSliceDefault;
/**
 * TicketsSlice Shared Slice
 *
 * - **API ID**: `tickets_slice`
 * - **Description**: `TicketsSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TicketsSliceSlice = prismic.SharedSlice<
  "tickets_slice",
  TicketsSliceSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocument,
      AllDocumentTypes,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      TextSliceDefaultPrimary,
      TextSliceDefault,
      TextSliceVariation,
      TextSlice,
      TicketsSliceSliceDefaultPrimary,
      TicketsSliceSliceDefaultItem,
      TicketsSliceSliceDefault,
      TicketsSliceSliceVariation,
      TicketsSliceSlice,
    };
  }
}
