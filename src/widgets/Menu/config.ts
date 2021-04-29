import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.soyswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.soyswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    // status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://soyswap.info",
      },
      {
        label: "Tokens",
        href: "https://soyswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://soyswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://soyswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.soyswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/soyswap",
      },
      {
        label: "Docs",
        href: "https://docs.soyswap.finance",
      },
      {
        label: "Blog",
        href: "https://soyswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/soyswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/SoySwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/SoySwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/SoySwap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/SoySwap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/SoySwapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/SoySwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/SoySwapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/SoySwapjp",
      },
      {
        label: "Français",
        href: "https://t.me/SoySwapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/SoySwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/SoySwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/soyswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
