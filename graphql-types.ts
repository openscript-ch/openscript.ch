export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>;
  ne: Maybe<Scalars['Boolean']>;
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>;
  ne: Maybe<Scalars['Date']>;
  gt: Maybe<Scalars['Date']>;
  gte: Maybe<Scalars['Date']>;
  lt: Maybe<Scalars['Date']>;
  lte: Maybe<Scalars['Date']>;
  in: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 0,
  absolutePath = 1,
  relativePath = 2,
  extension = 3,
  size = 4,
  prettySize = 5,
  modifiedTime = 6,
  accessTime = 7,
  changeTime = 8,
  birthTime = 9,
  root = 10,
  dir = 11,
  base = 12,
  ext = 13,
  name = 14,
  relativeDirectory = 15,
  dev = 16,
  mode = 17,
  nlink = 18,
  uid = 19,
  gid = 20,
  rdev = 21,
  ino = 22,
  atimeMs = 23,
  mtimeMs = 24,
  ctimeMs = 25,
  atime = 26,
  mtime = 27,
  ctime = 28,
  birthtime = 29,
  birthtimeMs = 30,
  blksize = 31,
  blocks = 32,
  id = 33,
  parent___id = 34,
  parent___parent___id = 35,
  parent___parent___parent___id = 36,
  parent___parent___parent___children = 37,
  parent___parent___children = 38,
  parent___parent___children___id = 39,
  parent___parent___children___children = 40,
  parent___parent___internal___content = 41,
  parent___parent___internal___contentDigest = 42,
  parent___parent___internal___description = 43,
  parent___parent___internal___fieldOwners = 44,
  parent___parent___internal___ignoreType = 45,
  parent___parent___internal___mediaType = 46,
  parent___parent___internal___owner = 47,
  parent___parent___internal___type = 48,
  parent___children = 49,
  parent___children___id = 50,
  parent___children___parent___id = 51,
  parent___children___parent___children = 52,
  parent___children___children = 53,
  parent___children___children___id = 54,
  parent___children___children___children = 55,
  parent___children___internal___content = 56,
  parent___children___internal___contentDigest = 57,
  parent___children___internal___description = 58,
  parent___children___internal___fieldOwners = 59,
  parent___children___internal___ignoreType = 60,
  parent___children___internal___mediaType = 61,
  parent___children___internal___owner = 62,
  parent___children___internal___type = 63,
  parent___internal___content = 64,
  parent___internal___contentDigest = 65,
  parent___internal___description = 66,
  parent___internal___fieldOwners = 67,
  parent___internal___ignoreType = 68,
  parent___internal___mediaType = 69,
  parent___internal___owner = 70,
  parent___internal___type = 71,
  children = 72,
  children___id = 73,
  children___parent___id = 74,
  children___parent___parent___id = 75,
  children___parent___parent___children = 76,
  children___parent___children = 77,
  children___parent___children___id = 78,
  children___parent___children___children = 79,
  children___parent___internal___content = 80,
  children___parent___internal___contentDigest = 81,
  children___parent___internal___description = 82,
  children___parent___internal___fieldOwners = 83,
  children___parent___internal___ignoreType = 84,
  children___parent___internal___mediaType = 85,
  children___parent___internal___owner = 86,
  children___parent___internal___type = 87,
  children___children = 88,
  children___children___id = 89,
  children___children___parent___id = 90,
  children___children___parent___children = 91,
  children___children___children = 92,
  children___children___children___id = 93,
  children___children___children___children = 94,
  children___children___internal___content = 95,
  children___children___internal___contentDigest = 96,
  children___children___internal___description = 97,
  children___children___internal___fieldOwners = 98,
  children___children___internal___ignoreType = 99,
  children___children___internal___mediaType = 100,
  children___children___internal___owner = 101,
  children___children___internal___type = 102,
  children___internal___content = 103,
  children___internal___contentDigest = 104,
  children___internal___description = 105,
  children___internal___fieldOwners = 106,
  children___internal___ignoreType = 107,
  children___internal___mediaType = 108,
  children___internal___owner = 109,
  children___internal___type = 110,
  internal___content = 111,
  internal___contentDigest = 112,
  internal___description = 113,
  internal___fieldOwners = 114,
  internal___ignoreType = 115,
  internal___mediaType = 116,
  internal___owner = 117,
  internal___type = 118
}

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  childImageSharp: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 0,
  absolutePath = 1,
  relativePath = 2,
  extension = 3,
  size = 4,
  prettySize = 5,
  modifiedTime = 6,
  accessTime = 7,
  changeTime = 8,
  birthTime = 9,
  root = 10,
  dir = 11,
  base = 12,
  ext = 13,
  name = 14,
  relativeDirectory = 15,
  dev = 16,
  mode = 17,
  nlink = 18,
  uid = 19,
  gid = 20,
  rdev = 21,
  ino = 22,
  atimeMs = 23,
  mtimeMs = 24,
  ctimeMs = 25,
  atime = 26,
  mtime = 27,
  ctime = 28,
  birthtime = 29,
  birthtimeMs = 30,
  blksize = 31,
  blocks = 32,
  publicURL = 33,
  childImageSharp___fixed___base64 = 34,
  childImageSharp___fixed___tracedSVG = 35,
  childImageSharp___fixed___aspectRatio = 36,
  childImageSharp___fixed___width = 37,
  childImageSharp___fixed___height = 38,
  childImageSharp___fixed___src = 39,
  childImageSharp___fixed___srcSet = 40,
  childImageSharp___fixed___srcWebp = 41,
  childImageSharp___fixed___srcSetWebp = 42,
  childImageSharp___fixed___originalName = 43,
  childImageSharp___resolutions___base64 = 44,
  childImageSharp___resolutions___tracedSVG = 45,
  childImageSharp___resolutions___aspectRatio = 46,
  childImageSharp___resolutions___width = 47,
  childImageSharp___resolutions___height = 48,
  childImageSharp___resolutions___src = 49,
  childImageSharp___resolutions___srcSet = 50,
  childImageSharp___resolutions___srcWebp = 51,
  childImageSharp___resolutions___srcSetWebp = 52,
  childImageSharp___resolutions___originalName = 53,
  childImageSharp___fluid___base64 = 54,
  childImageSharp___fluid___tracedSVG = 55,
  childImageSharp___fluid___aspectRatio = 56,
  childImageSharp___fluid___src = 57,
  childImageSharp___fluid___srcSet = 58,
  childImageSharp___fluid___srcWebp = 59,
  childImageSharp___fluid___srcSetWebp = 60,
  childImageSharp___fluid___sizes = 61,
  childImageSharp___fluid___originalImg = 62,
  childImageSharp___fluid___originalName = 63,
  childImageSharp___fluid___presentationWidth = 64,
  childImageSharp___fluid___presentationHeight = 65,
  childImageSharp___sizes___base64 = 66,
  childImageSharp___sizes___tracedSVG = 67,
  childImageSharp___sizes___aspectRatio = 68,
  childImageSharp___sizes___src = 69,
  childImageSharp___sizes___srcSet = 70,
  childImageSharp___sizes___srcWebp = 71,
  childImageSharp___sizes___srcSetWebp = 72,
  childImageSharp___sizes___sizes = 73,
  childImageSharp___sizes___originalImg = 74,
  childImageSharp___sizes___originalName = 75,
  childImageSharp___sizes___presentationWidth = 76,
  childImageSharp___sizes___presentationHeight = 77,
  childImageSharp___gatsbyImageData = 78,
  childImageSharp___original___width = 79,
  childImageSharp___original___height = 80,
  childImageSharp___original___src = 81,
  childImageSharp___resize___src = 82,
  childImageSharp___resize___tracedSVG = 83,
  childImageSharp___resize___width = 84,
  childImageSharp___resize___height = 85,
  childImageSharp___resize___aspectRatio = 86,
  childImageSharp___resize___originalName = 87,
  childImageSharp___id = 88,
  childImageSharp___parent___id = 89,
  childImageSharp___parent___parent___id = 90,
  childImageSharp___parent___parent___children = 91,
  childImageSharp___parent___children = 92,
  childImageSharp___parent___children___id = 93,
  childImageSharp___parent___children___children = 94,
  childImageSharp___parent___internal___content = 95,
  childImageSharp___parent___internal___contentDigest = 96,
  childImageSharp___parent___internal___description = 97,
  childImageSharp___parent___internal___fieldOwners = 98,
  childImageSharp___parent___internal___ignoreType = 99,
  childImageSharp___parent___internal___mediaType = 100,
  childImageSharp___parent___internal___owner = 101,
  childImageSharp___parent___internal___type = 102,
  childImageSharp___children = 103,
  childImageSharp___children___id = 104,
  childImageSharp___children___parent___id = 105,
  childImageSharp___children___parent___children = 106,
  childImageSharp___children___children = 107,
  childImageSharp___children___children___id = 108,
  childImageSharp___children___children___children = 109,
  childImageSharp___children___internal___content = 110,
  childImageSharp___children___internal___contentDigest = 111,
  childImageSharp___children___internal___description = 112,
  childImageSharp___children___internal___fieldOwners = 113,
  childImageSharp___children___internal___ignoreType = 114,
  childImageSharp___children___internal___mediaType = 115,
  childImageSharp___children___internal___owner = 116,
  childImageSharp___children___internal___type = 117,
  childImageSharp___internal___content = 118,
  childImageSharp___internal___contentDigest = 119,
  childImageSharp___internal___description = 120,
  childImageSharp___internal___fieldOwners = 121,
  childImageSharp___internal___ignoreType = 122,
  childImageSharp___internal___mediaType = 123,
  childImageSharp___internal___owner = 124,
  childImageSharp___internal___type = 125,
  id = 126,
  parent___id = 127,
  parent___parent___id = 128,
  parent___parent___parent___id = 129,
  parent___parent___parent___children = 130,
  parent___parent___children = 131,
  parent___parent___children___id = 132,
  parent___parent___children___children = 133,
  parent___parent___internal___content = 134,
  parent___parent___internal___contentDigest = 135,
  parent___parent___internal___description = 136,
  parent___parent___internal___fieldOwners = 137,
  parent___parent___internal___ignoreType = 138,
  parent___parent___internal___mediaType = 139,
  parent___parent___internal___owner = 140,
  parent___parent___internal___type = 141,
  parent___children = 142,
  parent___children___id = 143,
  parent___children___parent___id = 144,
  parent___children___parent___children = 145,
  parent___children___children = 146,
  parent___children___children___id = 147,
  parent___children___children___children = 148,
  parent___children___internal___content = 149,
  parent___children___internal___contentDigest = 150,
  parent___children___internal___description = 151,
  parent___children___internal___fieldOwners = 152,
  parent___children___internal___ignoreType = 153,
  parent___children___internal___mediaType = 154,
  parent___children___internal___owner = 155,
  parent___children___internal___type = 156,
  parent___internal___content = 157,
  parent___internal___contentDigest = 158,
  parent___internal___description = 159,
  parent___internal___fieldOwners = 160,
  parent___internal___ignoreType = 161,
  parent___internal___mediaType = 162,
  parent___internal___owner = 163,
  parent___internal___type = 164,
  children = 165,
  children___id = 166,
  children___parent___id = 167,
  children___parent___parent___id = 168,
  children___parent___parent___children = 169,
  children___parent___children = 170,
  children___parent___children___id = 171,
  children___parent___children___children = 172,
  children___parent___internal___content = 173,
  children___parent___internal___contentDigest = 174,
  children___parent___internal___description = 175,
  children___parent___internal___fieldOwners = 176,
  children___parent___internal___ignoreType = 177,
  children___parent___internal___mediaType = 178,
  children___parent___internal___owner = 179,
  children___parent___internal___type = 180,
  children___children = 181,
  children___children___id = 182,
  children___children___parent___id = 183,
  children___children___parent___children = 184,
  children___children___children = 185,
  children___children___children___id = 186,
  children___children___children___children = 187,
  children___children___internal___content = 188,
  children___children___internal___contentDigest = 189,
  children___children___internal___description = 190,
  children___children___internal___fieldOwners = 191,
  children___children___internal___ignoreType = 192,
  children___children___internal___mediaType = 193,
  children___children___internal___owner = 194,
  children___children___internal___type = 195,
  children___internal___content = 196,
  children___internal___contentDigest = 197,
  children___internal___description = 198,
  children___internal___fieldOwners = 199,
  children___internal___ignoreType = 200,
  children___internal___mediaType = 201,
  children___internal___owner = 202,
  children___internal___type = 203,
  internal___content = 204,
  internal___contentDigest = 205,
  internal___description = 206,
  internal___fieldOwners = 207,
  internal___ignoreType = 208,
  internal___mediaType = 209,
  internal___owner = 210,
  internal___type = 211,
  childMarkdownRemark___id = 212,
  childMarkdownRemark___frontmatter___title = 213,
  childMarkdownRemark___frontmatter___logo___sourceInstanceName = 214,
  childMarkdownRemark___frontmatter___logo___absolutePath = 215,
  childMarkdownRemark___frontmatter___logo___relativePath = 216,
  childMarkdownRemark___frontmatter___logo___extension = 217,
  childMarkdownRemark___frontmatter___logo___size = 218,
  childMarkdownRemark___frontmatter___logo___prettySize = 219,
  childMarkdownRemark___frontmatter___logo___modifiedTime = 220,
  childMarkdownRemark___frontmatter___logo___accessTime = 221,
  childMarkdownRemark___frontmatter___logo___changeTime = 222,
  childMarkdownRemark___frontmatter___logo___birthTime = 223,
  childMarkdownRemark___frontmatter___logo___root = 224,
  childMarkdownRemark___frontmatter___logo___dir = 225,
  childMarkdownRemark___frontmatter___logo___base = 226,
  childMarkdownRemark___frontmatter___logo___ext = 227,
  childMarkdownRemark___frontmatter___logo___name = 228,
  childMarkdownRemark___frontmatter___logo___relativeDirectory = 229,
  childMarkdownRemark___frontmatter___logo___dev = 230,
  childMarkdownRemark___frontmatter___logo___mode = 231,
  childMarkdownRemark___frontmatter___logo___nlink = 232,
  childMarkdownRemark___frontmatter___logo___uid = 233,
  childMarkdownRemark___frontmatter___logo___gid = 234,
  childMarkdownRemark___frontmatter___logo___rdev = 235,
  childMarkdownRemark___frontmatter___logo___ino = 236,
  childMarkdownRemark___frontmatter___logo___atimeMs = 237,
  childMarkdownRemark___frontmatter___logo___mtimeMs = 238,
  childMarkdownRemark___frontmatter___logo___ctimeMs = 239,
  childMarkdownRemark___frontmatter___logo___atime = 240,
  childMarkdownRemark___frontmatter___logo___mtime = 241,
  childMarkdownRemark___frontmatter___logo___ctime = 242,
  childMarkdownRemark___frontmatter___logo___birthtime = 243,
  childMarkdownRemark___frontmatter___logo___birthtimeMs = 244,
  childMarkdownRemark___frontmatter___logo___blksize = 245,
  childMarkdownRemark___frontmatter___logo___blocks = 246,
  childMarkdownRemark___frontmatter___logo___publicURL = 247,
  childMarkdownRemark___frontmatter___logo___id = 248,
  childMarkdownRemark___frontmatter___logo___children = 249,
  childMarkdownRemark___frontmatter___website = 250,
  childMarkdownRemark___frontmatter___order = 251,
  childMarkdownRemark___frontmatter___illustration = 252,
  childMarkdownRemark___excerpt = 253,
  childMarkdownRemark___rawMarkdownBody = 254,
  childMarkdownRemark___fileAbsolutePath = 255,
  childMarkdownRemark___fields___language = 256,
  childMarkdownRemark___fields___filename = 257,
  childMarkdownRemark___fields___kind = 258,
  childMarkdownRemark___html = 259,
  childMarkdownRemark___htmlAst = 260,
  childMarkdownRemark___excerptAst = 261,
  childMarkdownRemark___headings = 262,
  childMarkdownRemark___headings___id = 263,
  childMarkdownRemark___headings___value = 264,
  childMarkdownRemark___headings___depth = 265,
  childMarkdownRemark___timeToRead = 266,
  childMarkdownRemark___tableOfContents = 267,
  childMarkdownRemark___wordCount___paragraphs = 268,
  childMarkdownRemark___wordCount___sentences = 269,
  childMarkdownRemark___wordCount___words = 270,
  childMarkdownRemark___parent___id = 271,
  childMarkdownRemark___parent___parent___id = 272,
  childMarkdownRemark___parent___parent___children = 273,
  childMarkdownRemark___parent___children = 274,
  childMarkdownRemark___parent___children___id = 275,
  childMarkdownRemark___parent___children___children = 276,
  childMarkdownRemark___parent___internal___content = 277,
  childMarkdownRemark___parent___internal___contentDigest = 278,
  childMarkdownRemark___parent___internal___description = 279,
  childMarkdownRemark___parent___internal___fieldOwners = 280,
  childMarkdownRemark___parent___internal___ignoreType = 281,
  childMarkdownRemark___parent___internal___mediaType = 282,
  childMarkdownRemark___parent___internal___owner = 283,
  childMarkdownRemark___parent___internal___type = 284,
  childMarkdownRemark___children = 285,
  childMarkdownRemark___children___id = 286,
  childMarkdownRemark___children___parent___id = 287,
  childMarkdownRemark___children___parent___children = 288,
  childMarkdownRemark___children___children = 289,
  childMarkdownRemark___children___children___id = 290,
  childMarkdownRemark___children___children___children = 291,
  childMarkdownRemark___children___internal___content = 292,
  childMarkdownRemark___children___internal___contentDigest = 293,
  childMarkdownRemark___children___internal___description = 294,
  childMarkdownRemark___children___internal___fieldOwners = 295,
  childMarkdownRemark___children___internal___ignoreType = 296,
  childMarkdownRemark___children___internal___mediaType = 297,
  childMarkdownRemark___children___internal___owner = 298,
  childMarkdownRemark___children___internal___type = 299,
  childMarkdownRemark___internal___content = 300,
  childMarkdownRemark___internal___contentDigest = 301,
  childMarkdownRemark___internal___description = 302,
  childMarkdownRemark___internal___fieldOwners = 303,
  childMarkdownRemark___internal___ignoreType = 304,
  childMarkdownRemark___internal___mediaType = 305,
  childMarkdownRemark___internal___owner = 306,
  childMarkdownRemark___internal___type = 307
}

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>;
  ne: Maybe<Scalars['Float']>;
  gt: Maybe<Scalars['Float']>;
  gte: Maybe<Scalars['Float']>;
  lt: Maybe<Scalars['Float']>;
  lte: Maybe<Scalars['Float']>;
  in: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 2,
  EAST = 3,
  SOUTHEAST = 4,
  SOUTH = 5,
  SOUTHWEST = 6,
  WEST = 7,
  NORTHWEST = 8,
  ENTROPY = 9,
  ATTENTION = 10
}

export enum ImageFit {
  COVER = 0,
  CONTAIN = 1,
  FILL = 2,
  INSIDE = 3,
  OUTSIDE = 4
}

export enum ImageFormat {
  NO_CHANGE = 0,
  AUTO = 1,
  JPG = 2,
  PNG = 3,
  WEBP = 4
}

export enum ImageLayout {
  FIXED = 0,
  FLUID = 1,
  CONSTRAINED = 2
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 0,
  TRACED_SVG = 1,
  BLURRED = 2,
  NONE = 3
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions: Maybe<ImageSharpResolutions>;
  fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JpgOptions>;
  pngOptions: Maybe<PngOptions>;
  webpOptions: Maybe<WebPOptions>;
  transformOptions: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 0,
  fixed___tracedSVG = 1,
  fixed___aspectRatio = 2,
  fixed___width = 3,
  fixed___height = 4,
  fixed___src = 5,
  fixed___srcSet = 6,
  fixed___srcWebp = 7,
  fixed___srcSetWebp = 8,
  fixed___originalName = 9,
  resolutions___base64 = 10,
  resolutions___tracedSVG = 11,
  resolutions___aspectRatio = 12,
  resolutions___width = 13,
  resolutions___height = 14,
  resolutions___src = 15,
  resolutions___srcSet = 16,
  resolutions___srcWebp = 17,
  resolutions___srcSetWebp = 18,
  resolutions___originalName = 19,
  fluid___base64 = 20,
  fluid___tracedSVG = 21,
  fluid___aspectRatio = 22,
  fluid___src = 23,
  fluid___srcSet = 24,
  fluid___srcWebp = 25,
  fluid___srcSetWebp = 26,
  fluid___sizes = 27,
  fluid___originalImg = 28,
  fluid___originalName = 29,
  fluid___presentationWidth = 30,
  fluid___presentationHeight = 31,
  sizes___base64 = 32,
  sizes___tracedSVG = 33,
  sizes___aspectRatio = 34,
  sizes___src = 35,
  sizes___srcSet = 36,
  sizes___srcWebp = 37,
  sizes___srcSetWebp = 38,
  sizes___sizes = 39,
  sizes___originalImg = 40,
  sizes___originalName = 41,
  sizes___presentationWidth = 42,
  sizes___presentationHeight = 43,
  gatsbyImageData = 44,
  original___width = 45,
  original___height = 46,
  original___src = 47,
  resize___src = 48,
  resize___tracedSVG = 49,
  resize___width = 50,
  resize___height = 51,
  resize___aspectRatio = 52,
  resize___originalName = 53,
  id = 54,
  parent___id = 55,
  parent___parent___id = 56,
  parent___parent___parent___id = 57,
  parent___parent___parent___children = 58,
  parent___parent___children = 59,
  parent___parent___children___id = 60,
  parent___parent___children___children = 61,
  parent___parent___internal___content = 62,
  parent___parent___internal___contentDigest = 63,
  parent___parent___internal___description = 64,
  parent___parent___internal___fieldOwners = 65,
  parent___parent___internal___ignoreType = 66,
  parent___parent___internal___mediaType = 67,
  parent___parent___internal___owner = 68,
  parent___parent___internal___type = 69,
  parent___children = 70,
  parent___children___id = 71,
  parent___children___parent___id = 72,
  parent___children___parent___children = 73,
  parent___children___children = 74,
  parent___children___children___id = 75,
  parent___children___children___children = 76,
  parent___children___internal___content = 77,
  parent___children___internal___contentDigest = 78,
  parent___children___internal___description = 79,
  parent___children___internal___fieldOwners = 80,
  parent___children___internal___ignoreType = 81,
  parent___children___internal___mediaType = 82,
  parent___children___internal___owner = 83,
  parent___children___internal___type = 84,
  parent___internal___content = 85,
  parent___internal___contentDigest = 86,
  parent___internal___description = 87,
  parent___internal___fieldOwners = 88,
  parent___internal___ignoreType = 89,
  parent___internal___mediaType = 90,
  parent___internal___owner = 91,
  parent___internal___type = 92,
  children = 93,
  children___id = 94,
  children___parent___id = 95,
  children___parent___parent___id = 96,
  children___parent___parent___children = 97,
  children___parent___children = 98,
  children___parent___children___id = 99,
  children___parent___children___children = 100,
  children___parent___internal___content = 101,
  children___parent___internal___contentDigest = 102,
  children___parent___internal___description = 103,
  children___parent___internal___fieldOwners = 104,
  children___parent___internal___ignoreType = 105,
  children___parent___internal___mediaType = 106,
  children___parent___internal___owner = 107,
  children___parent___internal___type = 108,
  children___children = 109,
  children___children___id = 110,
  children___children___parent___id = 111,
  children___children___parent___children = 112,
  children___children___children = 113,
  children___children___children___id = 114,
  children___children___children___children = 115,
  children___children___internal___content = 116,
  children___children___internal___contentDigest = 117,
  children___children___internal___description = 118,
  children___children___internal___fieldOwners = 119,
  children___children___internal___ignoreType = 120,
  children___children___internal___mediaType = 121,
  children___children___internal___owner = 122,
  children___children___internal___type = 123,
  children___internal___content = 124,
  children___internal___contentDigest = 125,
  children___internal___description = 126,
  children___internal___fieldOwners = 127,
  children___internal___ignoreType = 128,
  children___internal___mediaType = 129,
  children___internal___owner = 130,
  children___internal___type = 131,
  internal___content = 132,
  internal___contentDigest = 133,
  internal___description = 134,
  internal___fieldOwners = 135,
  internal___ignoreType = 136,
  internal___mediaType = 137,
  internal___owner = 138,
  internal___type = 139
}

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>;
  ne: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality: Maybe<Scalars['Int']>;
  progressive: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>;
  ne: Maybe<Scalars['JSON']>;
  in: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex: Maybe<Scalars['JSON']>;
  glob: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  PLAIN = 0,
  HTML = 1,
  MARKDOWN = 2
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  depth: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  value: Maybe<StringQueryOperatorInput>;
  depth: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = 0,
  h2 = 1,
  h3 = 2,
  h4 = 3,
  h5 = 4,
  h6 = 5
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  excerpt: Maybe<Scalars['String']>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  fileAbsolutePath: Maybe<Scalars['String']>;
  fields: Maybe<MarkdownRemarkFields>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  excerptAst: Maybe<Scalars['JSON']>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead: Maybe<Scalars['Int']>;
  tableOfContents: Maybe<Scalars['String']>;
  wordCount: Maybe<MarkdownWordCount>;
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  language: Maybe<Scalars['String']>;
  filename: Maybe<Scalars['String']>;
  kind: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  id = 0,
  frontmatter___title = 1,
  frontmatter___logo___sourceInstanceName = 2,
  frontmatter___logo___absolutePath = 3,
  frontmatter___logo___relativePath = 4,
  frontmatter___logo___extension = 5,
  frontmatter___logo___size = 6,
  frontmatter___logo___prettySize = 7,
  frontmatter___logo___modifiedTime = 8,
  frontmatter___logo___accessTime = 9,
  frontmatter___logo___changeTime = 10,
  frontmatter___logo___birthTime = 11,
  frontmatter___logo___root = 12,
  frontmatter___logo___dir = 13,
  frontmatter___logo___base = 14,
  frontmatter___logo___ext = 15,
  frontmatter___logo___name = 16,
  frontmatter___logo___relativeDirectory = 17,
  frontmatter___logo___dev = 18,
  frontmatter___logo___mode = 19,
  frontmatter___logo___nlink = 20,
  frontmatter___logo___uid = 21,
  frontmatter___logo___gid = 22,
  frontmatter___logo___rdev = 23,
  frontmatter___logo___ino = 24,
  frontmatter___logo___atimeMs = 25,
  frontmatter___logo___mtimeMs = 26,
  frontmatter___logo___ctimeMs = 27,
  frontmatter___logo___atime = 28,
  frontmatter___logo___mtime = 29,
  frontmatter___logo___ctime = 30,
  frontmatter___logo___birthtime = 31,
  frontmatter___logo___birthtimeMs = 32,
  frontmatter___logo___blksize = 33,
  frontmatter___logo___blocks = 34,
  frontmatter___logo___publicURL = 35,
  frontmatter___logo___childImageSharp___gatsbyImageData = 36,
  frontmatter___logo___childImageSharp___id = 37,
  frontmatter___logo___childImageSharp___children = 38,
  frontmatter___logo___id = 39,
  frontmatter___logo___parent___id = 40,
  frontmatter___logo___parent___children = 41,
  frontmatter___logo___children = 42,
  frontmatter___logo___children___id = 43,
  frontmatter___logo___children___children = 44,
  frontmatter___logo___internal___content = 45,
  frontmatter___logo___internal___contentDigest = 46,
  frontmatter___logo___internal___description = 47,
  frontmatter___logo___internal___fieldOwners = 48,
  frontmatter___logo___internal___ignoreType = 49,
  frontmatter___logo___internal___mediaType = 50,
  frontmatter___logo___internal___owner = 51,
  frontmatter___logo___internal___type = 52,
  frontmatter___logo___childMarkdownRemark___id = 53,
  frontmatter___logo___childMarkdownRemark___excerpt = 54,
  frontmatter___logo___childMarkdownRemark___rawMarkdownBody = 55,
  frontmatter___logo___childMarkdownRemark___fileAbsolutePath = 56,
  frontmatter___logo___childMarkdownRemark___html = 57,
  frontmatter___logo___childMarkdownRemark___htmlAst = 58,
  frontmatter___logo___childMarkdownRemark___excerptAst = 59,
  frontmatter___logo___childMarkdownRemark___headings = 60,
  frontmatter___logo___childMarkdownRemark___timeToRead = 61,
  frontmatter___logo___childMarkdownRemark___tableOfContents = 62,
  frontmatter___logo___childMarkdownRemark___children = 63,
  frontmatter___website = 64,
  frontmatter___order = 65,
  frontmatter___illustration = 66,
  excerpt = 67,
  rawMarkdownBody = 68,
  fileAbsolutePath = 69,
  fields___language = 70,
  fields___filename = 71,
  fields___kind = 72,
  html = 73,
  htmlAst = 74,
  excerptAst = 75,
  headings = 76,
  headings___id = 77,
  headings___value = 78,
  headings___depth = 79,
  timeToRead = 80,
  tableOfContents = 81,
  wordCount___paragraphs = 82,
  wordCount___sentences = 83,
  wordCount___words = 84,
  parent___id = 85,
  parent___parent___id = 86,
  parent___parent___parent___id = 87,
  parent___parent___parent___children = 88,
  parent___parent___children = 89,
  parent___parent___children___id = 90,
  parent___parent___children___children = 91,
  parent___parent___internal___content = 92,
  parent___parent___internal___contentDigest = 93,
  parent___parent___internal___description = 94,
  parent___parent___internal___fieldOwners = 95,
  parent___parent___internal___ignoreType = 96,
  parent___parent___internal___mediaType = 97,
  parent___parent___internal___owner = 98,
  parent___parent___internal___type = 99,
  parent___children = 100,
  parent___children___id = 101,
  parent___children___parent___id = 102,
  parent___children___parent___children = 103,
  parent___children___children = 104,
  parent___children___children___id = 105,
  parent___children___children___children = 106,
  parent___children___internal___content = 107,
  parent___children___internal___contentDigest = 108,
  parent___children___internal___description = 109,
  parent___children___internal___fieldOwners = 110,
  parent___children___internal___ignoreType = 111,
  parent___children___internal___mediaType = 112,
  parent___children___internal___owner = 113,
  parent___children___internal___type = 114,
  parent___internal___content = 115,
  parent___internal___contentDigest = 116,
  parent___internal___description = 117,
  parent___internal___fieldOwners = 118,
  parent___internal___ignoreType = 119,
  parent___internal___mediaType = 120,
  parent___internal___owner = 121,
  parent___internal___type = 122,
  children = 123,
  children___id = 124,
  children___parent___id = 125,
  children___parent___parent___id = 126,
  children___parent___parent___children = 127,
  children___parent___children = 128,
  children___parent___children___id = 129,
  children___parent___children___children = 130,
  children___parent___internal___content = 131,
  children___parent___internal___contentDigest = 132,
  children___parent___internal___description = 133,
  children___parent___internal___fieldOwners = 134,
  children___parent___internal___ignoreType = 135,
  children___parent___internal___mediaType = 136,
  children___parent___internal___owner = 137,
  children___parent___internal___type = 138,
  children___children = 139,
  children___children___id = 140,
  children___children___parent___id = 141,
  children___children___parent___children = 142,
  children___children___children = 143,
  children___children___children___id = 144,
  children___children___children___children = 145,
  children___children___internal___content = 146,
  children___children___internal___contentDigest = 147,
  children___children___internal___description = 148,
  children___children___internal___fieldOwners = 149,
  children___children___internal___ignoreType = 150,
  children___children___internal___mediaType = 151,
  children___children___internal___owner = 152,
  children___children___internal___type = 153,
  children___internal___content = 154,
  children___internal___contentDigest = 155,
  children___internal___description = 156,
  children___internal___fieldOwners = 157,
  children___internal___ignoreType = 158,
  children___internal___mediaType = 159,
  children___internal___owner = 160,
  children___internal___type = 161,
  internal___content = 162,
  internal___contentDigest = 163,
  internal___description = 164,
  internal___fieldOwners = 165,
  internal___ignoreType = 166,
  internal___mediaType = 167,
  internal___owner = 168,
  internal___type = 169
}

export type MarkdownRemarkFieldsFilterInput = {
  language: Maybe<StringQueryOperatorInput>;
  filename: Maybe<StringQueryOperatorInput>;
  kind: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title: Maybe<Scalars['String']>;
  logo: Maybe<File>;
  website: Maybe<Scalars['String']>;
  order: Maybe<Scalars['Int']>;
  illustration: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  logo: Maybe<FileFilterInput>;
  website: Maybe<StringQueryOperatorInput>;
  order: Maybe<IntQueryOperatorInput>;
  illustration: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>;
  sentences: Maybe<IntQueryOperatorInput>;
  words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality: Maybe<Scalars['Int']>;
  compressionSpeed: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>;
  turdSize: Maybe<Scalars['Float']>;
  alphaMax: Maybe<Scalars['Float']>;
  optCurve: Maybe<Scalars['Boolean']>;
  optTolerance: Maybe<Scalars['Float']>;
  threshold: Maybe<Scalars['Int']>;
  blackOnWhite: Maybe<Scalars['Boolean']>;
  color: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 0,
  TURNPOLICY_WHITE = 1,
  TURNPOLICY_LEFT = 2,
  TURNPOLICY_RIGHT = 3,
  TURNPOLICY_MINORITY = 4,
  TURNPOLICY_MAJORITY = 5
}

export type Query = {
  __typename?: 'Query';
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars['Int']>;
  host: Maybe<Scalars['String']>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 0,
  parent___id = 1,
  parent___parent___id = 2,
  parent___parent___parent___id = 3,
  parent___parent___parent___children = 4,
  parent___parent___children = 5,
  parent___parent___children___id = 6,
  parent___parent___children___children = 7,
  parent___parent___internal___content = 8,
  parent___parent___internal___contentDigest = 9,
  parent___parent___internal___description = 10,
  parent___parent___internal___fieldOwners = 11,
  parent___parent___internal___ignoreType = 12,
  parent___parent___internal___mediaType = 13,
  parent___parent___internal___owner = 14,
  parent___parent___internal___type = 15,
  parent___children = 16,
  parent___children___id = 17,
  parent___children___parent___id = 18,
  parent___children___parent___children = 19,
  parent___children___children = 20,
  parent___children___children___id = 21,
  parent___children___children___children = 22,
  parent___children___internal___content = 23,
  parent___children___internal___contentDigest = 24,
  parent___children___internal___description = 25,
  parent___children___internal___fieldOwners = 26,
  parent___children___internal___ignoreType = 27,
  parent___children___internal___mediaType = 28,
  parent___children___internal___owner = 29,
  parent___children___internal___type = 30,
  parent___internal___content = 31,
  parent___internal___contentDigest = 32,
  parent___internal___description = 33,
  parent___internal___fieldOwners = 34,
  parent___internal___ignoreType = 35,
  parent___internal___mediaType = 36,
  parent___internal___owner = 37,
  parent___internal___type = 38,
  children = 39,
  children___id = 40,
  children___parent___id = 41,
  children___parent___parent___id = 42,
  children___parent___parent___children = 43,
  children___parent___children = 44,
  children___parent___children___id = 45,
  children___parent___children___children = 46,
  children___parent___internal___content = 47,
  children___parent___internal___contentDigest = 48,
  children___parent___internal___description = 49,
  children___parent___internal___fieldOwners = 50,
  children___parent___internal___ignoreType = 51,
  children___parent___internal___mediaType = 52,
  children___parent___internal___owner = 53,
  children___parent___internal___type = 54,
  children___children = 55,
  children___children___id = 56,
  children___children___parent___id = 57,
  children___children___parent___children = 58,
  children___children___children = 59,
  children___children___children___id = 60,
  children___children___children___children = 61,
  children___children___internal___content = 62,
  children___children___internal___contentDigest = 63,
  children___children___internal___description = 64,
  children___children___internal___fieldOwners = 65,
  children___children___internal___ignoreType = 66,
  children___children___internal___mediaType = 67,
  children___children___internal___owner = 68,
  children___children___internal___type = 69,
  children___internal___content = 70,
  children___internal___contentDigest = 71,
  children___internal___description = 72,
  children___internal___fieldOwners = 73,
  children___internal___ignoreType = 74,
  children___internal___mediaType = 75,
  children___internal___owner = 76,
  children___internal___type = 77,
  internal___content = 78,
  internal___contentDigest = 79,
  internal___description = 80,
  internal___fieldOwners = 81,
  internal___ignoreType = 82,
  internal___mediaType = 83,
  internal___owner = 84,
  internal___type = 85,
  buildTime = 86
}

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 0,
  siteMetadata___title = 1,
  siteMetadata___description = 2,
  siteMetadata___siteUrl = 3,
  siteMetadata___phone = 4,
  siteMetadata___email = 5,
  siteMetadata___topNavigation = 6,
  port = 7,
  host = 8,
  pathPrefix = 9,
  polyfill = 10,
  id = 11,
  parent___id = 12,
  parent___parent___id = 13,
  parent___parent___parent___id = 14,
  parent___parent___parent___children = 15,
  parent___parent___children = 16,
  parent___parent___children___id = 17,
  parent___parent___children___children = 18,
  parent___parent___internal___content = 19,
  parent___parent___internal___contentDigest = 20,
  parent___parent___internal___description = 21,
  parent___parent___internal___fieldOwners = 22,
  parent___parent___internal___ignoreType = 23,
  parent___parent___internal___mediaType = 24,
  parent___parent___internal___owner = 25,
  parent___parent___internal___type = 26,
  parent___children = 27,
  parent___children___id = 28,
  parent___children___parent___id = 29,
  parent___children___parent___children = 30,
  parent___children___children = 31,
  parent___children___children___id = 32,
  parent___children___children___children = 33,
  parent___children___internal___content = 34,
  parent___children___internal___contentDigest = 35,
  parent___children___internal___description = 36,
  parent___children___internal___fieldOwners = 37,
  parent___children___internal___ignoreType = 38,
  parent___children___internal___mediaType = 39,
  parent___children___internal___owner = 40,
  parent___children___internal___type = 41,
  parent___internal___content = 42,
  parent___internal___contentDigest = 43,
  parent___internal___description = 44,
  parent___internal___fieldOwners = 45,
  parent___internal___ignoreType = 46,
  parent___internal___mediaType = 47,
  parent___internal___owner = 48,
  parent___internal___type = 49,
  children = 50,
  children___id = 51,
  children___parent___id = 52,
  children___parent___parent___id = 53,
  children___parent___parent___children = 54,
  children___parent___children = 55,
  children___parent___children___id = 56,
  children___parent___children___children = 57,
  children___parent___internal___content = 58,
  children___parent___internal___contentDigest = 59,
  children___parent___internal___description = 60,
  children___parent___internal___fieldOwners = 61,
  children___parent___internal___ignoreType = 62,
  children___parent___internal___mediaType = 63,
  children___parent___internal___owner = 64,
  children___parent___internal___type = 65,
  children___children = 66,
  children___children___id = 67,
  children___children___parent___id = 68,
  children___children___parent___children = 69,
  children___children___children = 70,
  children___children___children___id = 71,
  children___children___children___children = 72,
  children___children___internal___content = 73,
  children___children___internal___contentDigest = 74,
  children___children___internal___description = 75,
  children___children___internal___fieldOwners = 76,
  children___children___internal___ignoreType = 77,
  children___children___internal___mediaType = 78,
  children___children___internal___owner = 79,
  children___children___internal___type = 80,
  children___internal___content = 81,
  children___internal___contentDigest = 82,
  children___internal___description = 83,
  children___internal___fieldOwners = 84,
  children___internal___ignoreType = 85,
  children___internal___mediaType = 86,
  children___internal___owner = 87,
  children___internal___type = 88,
  internal___content = 89,
  internal___contentDigest = 90,
  internal___description = 91,
  internal___fieldOwners = 92,
  internal___ignoreType = 93,
  internal___mediaType = 94,
  internal___owner = 95,
  internal___type = 96
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  context: Maybe<SitePageContext>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
  componentPath: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  language: Maybe<Scalars['String']>;
  alternativeLanguagePaths: Maybe<Array<Maybe<SitePageContextAlternativeLanguagePaths>>>;
};

export type SitePageContextAlternativeLanguagePaths = {
  __typename?: 'SitePageContextAlternativeLanguagePaths';
  language: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type SitePageContextAlternativeLanguagePathsFilterInput = {
  language: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextAlternativeLanguagePathsFilterListInput = {
  elemMatch: Maybe<SitePageContextAlternativeLanguagePathsFilterInput>;
};

export type SitePageContextFilterInput = {
  language: Maybe<StringQueryOperatorInput>;
  alternativeLanguagePaths: Maybe<SitePageContextAlternativeLanguagePathsFilterListInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 0,
  component = 1,
  internalComponentName = 2,
  componentChunkName = 3,
  matchPath = 4,
  id = 5,
  parent___id = 6,
  parent___parent___id = 7,
  parent___parent___parent___id = 8,
  parent___parent___parent___children = 9,
  parent___parent___children = 10,
  parent___parent___children___id = 11,
  parent___parent___children___children = 12,
  parent___parent___internal___content = 13,
  parent___parent___internal___contentDigest = 14,
  parent___parent___internal___description = 15,
  parent___parent___internal___fieldOwners = 16,
  parent___parent___internal___ignoreType = 17,
  parent___parent___internal___mediaType = 18,
  parent___parent___internal___owner = 19,
  parent___parent___internal___type = 20,
  parent___children = 21,
  parent___children___id = 22,
  parent___children___parent___id = 23,
  parent___children___parent___children = 24,
  parent___children___children = 25,
  parent___children___children___id = 26,
  parent___children___children___children = 27,
  parent___children___internal___content = 28,
  parent___children___internal___contentDigest = 29,
  parent___children___internal___description = 30,
  parent___children___internal___fieldOwners = 31,
  parent___children___internal___ignoreType = 32,
  parent___children___internal___mediaType = 33,
  parent___children___internal___owner = 34,
  parent___children___internal___type = 35,
  parent___internal___content = 36,
  parent___internal___contentDigest = 37,
  parent___internal___description = 38,
  parent___internal___fieldOwners = 39,
  parent___internal___ignoreType = 40,
  parent___internal___mediaType = 41,
  parent___internal___owner = 42,
  parent___internal___type = 43,
  children = 44,
  children___id = 45,
  children___parent___id = 46,
  children___parent___parent___id = 47,
  children___parent___parent___children = 48,
  children___parent___children = 49,
  children___parent___children___id = 50,
  children___parent___children___children = 51,
  children___parent___internal___content = 52,
  children___parent___internal___contentDigest = 53,
  children___parent___internal___description = 54,
  children___parent___internal___fieldOwners = 55,
  children___parent___internal___ignoreType = 56,
  children___parent___internal___mediaType = 57,
  children___parent___internal___owner = 58,
  children___parent___internal___type = 59,
  children___children = 60,
  children___children___id = 61,
  children___children___parent___id = 62,
  children___children___parent___children = 63,
  children___children___children = 64,
  children___children___children___id = 65,
  children___children___children___children = 66,
  children___children___internal___content = 67,
  children___children___internal___contentDigest = 68,
  children___children___internal___description = 69,
  children___children___internal___fieldOwners = 70,
  children___children___internal___ignoreType = 71,
  children___children___internal___mediaType = 72,
  children___children___internal___owner = 73,
  children___children___internal___type = 74,
  children___internal___content = 75,
  children___internal___contentDigest = 76,
  children___internal___description = 77,
  children___internal___fieldOwners = 78,
  children___internal___ignoreType = 79,
  children___internal___mediaType = 80,
  children___internal___owner = 81,
  children___internal___type = 82,
  internal___content = 83,
  internal___contentDigest = 84,
  internal___description = 85,
  internal___fieldOwners = 86,
  internal___ignoreType = 87,
  internal___mediaType = 88,
  internal___owner = 89,
  internal___type = 90,
  isCreatedByStatefulCreatePages = 91,
  context___language = 92,
  context___alternativeLanguagePaths = 93,
  context___alternativeLanguagePaths___language = 94,
  context___alternativeLanguagePaths___path = 95,
  pluginCreator___id = 96,
  pluginCreator___parent___id = 97,
  pluginCreator___parent___parent___id = 98,
  pluginCreator___parent___parent___children = 99,
  pluginCreator___parent___children = 100,
  pluginCreator___parent___children___id = 101,
  pluginCreator___parent___children___children = 102,
  pluginCreator___parent___internal___content = 103,
  pluginCreator___parent___internal___contentDigest = 104,
  pluginCreator___parent___internal___description = 105,
  pluginCreator___parent___internal___fieldOwners = 106,
  pluginCreator___parent___internal___ignoreType = 107,
  pluginCreator___parent___internal___mediaType = 108,
  pluginCreator___parent___internal___owner = 109,
  pluginCreator___parent___internal___type = 110,
  pluginCreator___children = 111,
  pluginCreator___children___id = 112,
  pluginCreator___children___parent___id = 113,
  pluginCreator___children___parent___children = 114,
  pluginCreator___children___children = 115,
  pluginCreator___children___children___id = 116,
  pluginCreator___children___children___children = 117,
  pluginCreator___children___internal___content = 118,
  pluginCreator___children___internal___contentDigest = 119,
  pluginCreator___children___internal___description = 120,
  pluginCreator___children___internal___fieldOwners = 121,
  pluginCreator___children___internal___ignoreType = 122,
  pluginCreator___children___internal___mediaType = 123,
  pluginCreator___children___internal___owner = 124,
  pluginCreator___children___internal___type = 125,
  pluginCreator___internal___content = 126,
  pluginCreator___internal___contentDigest = 127,
  pluginCreator___internal___description = 128,
  pluginCreator___internal___fieldOwners = 129,
  pluginCreator___internal___ignoreType = 130,
  pluginCreator___internal___mediaType = 131,
  pluginCreator___internal___owner = 132,
  pluginCreator___internal___type = 133,
  pluginCreator___resolve = 134,
  pluginCreator___name = 135,
  pluginCreator___version = 136,
  pluginCreator___pluginOptions___plugins = 137,
  pluginCreator___pluginOptions___plugins___resolve = 138,
  pluginCreator___pluginOptions___plugins___id = 139,
  pluginCreator___pluginOptions___plugins___name = 140,
  pluginCreator___pluginOptions___plugins___version = 141,
  pluginCreator___pluginOptions___plugins___nodeAPIs = 142,
  pluginCreator___pluginOptions___plugins___browserAPIs = 143,
  pluginCreator___pluginOptions___plugins___pluginFilepath = 144,
  pluginCreator___pluginOptions___sourceMap = 145,
  pluginCreator___pluginOptions___autoLabel = 146,
  pluginCreator___pluginOptions___labelFormat = 147,
  pluginCreator___pluginOptions___cssPropOptimization = 148,
  pluginCreator___pluginOptions___base64Width = 149,
  pluginCreator___pluginOptions___stripMetadata = 150,
  pluginCreator___pluginOptions___defaultQuality = 151,
  pluginCreator___pluginOptions___failOnError = 152,
  pluginCreator___pluginOptions___output = 153,
  pluginCreator___pluginOptions___createLinkInHead = 154,
  pluginCreator___pluginOptions___name = 155,
  pluginCreator___pluginOptions___short_name = 156,
  pluginCreator___pluginOptions___start_url = 157,
  pluginCreator___pluginOptions___background_color = 158,
  pluginCreator___pluginOptions___theme_color = 159,
  pluginCreator___pluginOptions___display = 160,
  pluginCreator___pluginOptions___icon = 161,
  pluginCreator___pluginOptions___icons = 162,
  pluginCreator___pluginOptions___icons___src = 163,
  pluginCreator___pluginOptions___icons___sizes = 164,
  pluginCreator___pluginOptions___icons___type = 165,
  pluginCreator___pluginOptions___legacy = 166,
  pluginCreator___pluginOptions___theme_color_in_head = 167,
  pluginCreator___pluginOptions___cache_busting_mode = 168,
  pluginCreator___pluginOptions___crossOrigin = 169,
  pluginCreator___pluginOptions___include_favicon = 170,
  pluginCreator___pluginOptions___cacheDigest = 171,
  pluginCreator___pluginOptions___path = 172,
  pluginCreator___pluginOptions___maxWidth = 173,
  pluginCreator___pluginOptions___quality = 174,
  pluginCreator___pluginOptions___linkImagesToOriginal = 175,
  pluginCreator___pluginOptions___showCaptions = 176,
  pluginCreator___pluginOptions___markdownCaptions = 177,
  pluginCreator___pluginOptions___sizeByPixelDensity = 178,
  pluginCreator___pluginOptions___backgroundColor = 179,
  pluginCreator___pluginOptions___withWebp = 180,
  pluginCreator___pluginOptions___tracedSVG = 181,
  pluginCreator___pluginOptions___loading = 182,
  pluginCreator___pluginOptions___disableBgImageOnAlpha = 183,
  pluginCreator___pluginOptions___disableBgImage = 184,
  pluginCreator___pluginOptions___configDir = 185,
  pluginCreator___pluginOptions___tsNode = 186,
  pluginCreator___pluginOptions___pathCheck = 187,
  pluginCreator___pluginOptions___allExtensions = 188,
  pluginCreator___pluginOptions___isTSX = 189,
  pluginCreator___pluginOptions___jsxPragma = 190,
  pluginCreator___nodeAPIs = 191,
  pluginCreator___browserAPIs = 192,
  pluginCreator___ssrAPIs = 193,
  pluginCreator___pluginFilepath = 194,
  pluginCreator___packageJson___name = 195,
  pluginCreator___packageJson___description = 196,
  pluginCreator___packageJson___version = 197,
  pluginCreator___packageJson___main = 198,
  pluginCreator___packageJson___license = 199,
  pluginCreator___packageJson___dependencies = 200,
  pluginCreator___packageJson___dependencies___name = 201,
  pluginCreator___packageJson___dependencies___version = 202,
  pluginCreator___packageJson___devDependencies = 203,
  pluginCreator___packageJson___devDependencies___name = 204,
  pluginCreator___packageJson___devDependencies___version = 205,
  pluginCreator___packageJson___peerDependencies = 206,
  pluginCreator___packageJson___peerDependencies___name = 207,
  pluginCreator___packageJson___peerDependencies___version = 208,
  pluginCreator___packageJson___keywords = 209,
  pluginCreatorId = 210,
  componentPath = 211
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 0,
  parent___id = 1,
  parent___parent___id = 2,
  parent___parent___parent___id = 3,
  parent___parent___parent___children = 4,
  parent___parent___children = 5,
  parent___parent___children___id = 6,
  parent___parent___children___children = 7,
  parent___parent___internal___content = 8,
  parent___parent___internal___contentDigest = 9,
  parent___parent___internal___description = 10,
  parent___parent___internal___fieldOwners = 11,
  parent___parent___internal___ignoreType = 12,
  parent___parent___internal___mediaType = 13,
  parent___parent___internal___owner = 14,
  parent___parent___internal___type = 15,
  parent___children = 16,
  parent___children___id = 17,
  parent___children___parent___id = 18,
  parent___children___parent___children = 19,
  parent___children___children = 20,
  parent___children___children___id = 21,
  parent___children___children___children = 22,
  parent___children___internal___content = 23,
  parent___children___internal___contentDigest = 24,
  parent___children___internal___description = 25,
  parent___children___internal___fieldOwners = 26,
  parent___children___internal___ignoreType = 27,
  parent___children___internal___mediaType = 28,
  parent___children___internal___owner = 29,
  parent___children___internal___type = 30,
  parent___internal___content = 31,
  parent___internal___contentDigest = 32,
  parent___internal___description = 33,
  parent___internal___fieldOwners = 34,
  parent___internal___ignoreType = 35,
  parent___internal___mediaType = 36,
  parent___internal___owner = 37,
  parent___internal___type = 38,
  children = 39,
  children___id = 40,
  children___parent___id = 41,
  children___parent___parent___id = 42,
  children___parent___parent___children = 43,
  children___parent___children = 44,
  children___parent___children___id = 45,
  children___parent___children___children = 46,
  children___parent___internal___content = 47,
  children___parent___internal___contentDigest = 48,
  children___parent___internal___description = 49,
  children___parent___internal___fieldOwners = 50,
  children___parent___internal___ignoreType = 51,
  children___parent___internal___mediaType = 52,
  children___parent___internal___owner = 53,
  children___parent___internal___type = 54,
  children___children = 55,
  children___children___id = 56,
  children___children___parent___id = 57,
  children___children___parent___children = 58,
  children___children___children = 59,
  children___children___children___id = 60,
  children___children___children___children = 61,
  children___children___internal___content = 62,
  children___children___internal___contentDigest = 63,
  children___children___internal___description = 64,
  children___children___internal___fieldOwners = 65,
  children___children___internal___ignoreType = 66,
  children___children___internal___mediaType = 67,
  children___children___internal___owner = 68,
  children___children___internal___type = 69,
  children___internal___content = 70,
  children___internal___contentDigest = 71,
  children___internal___description = 72,
  children___internal___fieldOwners = 73,
  children___internal___ignoreType = 74,
  children___internal___mediaType = 75,
  children___internal___owner = 76,
  children___internal___type = 77,
  internal___content = 78,
  internal___contentDigest = 79,
  internal___description = 80,
  internal___fieldOwners = 81,
  internal___ignoreType = 82,
  internal___mediaType = 83,
  internal___owner = 84,
  internal___type = 85,
  resolve = 86,
  name = 87,
  version = 88,
  pluginOptions___plugins = 89,
  pluginOptions___plugins___resolve = 90,
  pluginOptions___plugins___id = 91,
  pluginOptions___plugins___name = 92,
  pluginOptions___plugins___version = 93,
  pluginOptions___plugins___pluginOptions___maxWidth = 94,
  pluginOptions___plugins___pluginOptions___quality = 95,
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 96,
  pluginOptions___plugins___pluginOptions___showCaptions = 97,
  pluginOptions___plugins___pluginOptions___markdownCaptions = 98,
  pluginOptions___plugins___pluginOptions___sizeByPixelDensity = 99,
  pluginOptions___plugins___pluginOptions___backgroundColor = 100,
  pluginOptions___plugins___pluginOptions___withWebp = 101,
  pluginOptions___plugins___pluginOptions___tracedSVG = 102,
  pluginOptions___plugins___pluginOptions___loading = 103,
  pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = 104,
  pluginOptions___plugins___pluginOptions___disableBgImage = 105,
  pluginOptions___plugins___nodeAPIs = 106,
  pluginOptions___plugins___browserAPIs = 107,
  pluginOptions___plugins___pluginFilepath = 108,
  pluginOptions___sourceMap = 109,
  pluginOptions___autoLabel = 110,
  pluginOptions___labelFormat = 111,
  pluginOptions___cssPropOptimization = 112,
  pluginOptions___base64Width = 113,
  pluginOptions___stripMetadata = 114,
  pluginOptions___defaultQuality = 115,
  pluginOptions___failOnError = 116,
  pluginOptions___output = 117,
  pluginOptions___createLinkInHead = 118,
  pluginOptions___name = 119,
  pluginOptions___short_name = 120,
  pluginOptions___start_url = 121,
  pluginOptions___background_color = 122,
  pluginOptions___theme_color = 123,
  pluginOptions___display = 124,
  pluginOptions___icon = 125,
  pluginOptions___icons = 126,
  pluginOptions___icons___src = 127,
  pluginOptions___icons___sizes = 128,
  pluginOptions___icons___type = 129,
  pluginOptions___legacy = 130,
  pluginOptions___theme_color_in_head = 131,
  pluginOptions___cache_busting_mode = 132,
  pluginOptions___crossOrigin = 133,
  pluginOptions___include_favicon = 134,
  pluginOptions___cacheDigest = 135,
  pluginOptions___path = 136,
  pluginOptions___maxWidth = 137,
  pluginOptions___quality = 138,
  pluginOptions___linkImagesToOriginal = 139,
  pluginOptions___showCaptions = 140,
  pluginOptions___markdownCaptions = 141,
  pluginOptions___sizeByPixelDensity = 142,
  pluginOptions___backgroundColor = 143,
  pluginOptions___withWebp = 144,
  pluginOptions___tracedSVG = 145,
  pluginOptions___loading = 146,
  pluginOptions___disableBgImageOnAlpha = 147,
  pluginOptions___disableBgImage = 148,
  pluginOptions___configDir = 149,
  pluginOptions___tsNode = 150,
  pluginOptions___pathCheck = 151,
  pluginOptions___allExtensions = 152,
  pluginOptions___isTSX = 153,
  pluginOptions___jsxPragma = 154,
  nodeAPIs = 155,
  browserAPIs = 156,
  ssrAPIs = 157,
  pluginFilepath = 158,
  packageJson___name = 159,
  packageJson___description = 160,
  packageJson___version = 161,
  packageJson___main = 162,
  packageJson___license = 163,
  packageJson___dependencies = 164,
  packageJson___dependencies___name = 165,
  packageJson___dependencies___version = 166,
  packageJson___devDependencies = 167,
  packageJson___devDependencies___name = 168,
  packageJson___devDependencies___version = 169,
  packageJson___peerDependencies = 170,
  packageJson___peerDependencies___name = 171,
  packageJson___peerDependencies___version = 172,
  packageJson___keywords = 173
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  sourceMap: Maybe<Scalars['Boolean']>;
  autoLabel: Maybe<Scalars['Boolean']>;
  labelFormat: Maybe<Scalars['String']>;
  cssPropOptimization: Maybe<Scalars['Boolean']>;
  base64Width: Maybe<Scalars['Int']>;
  stripMetadata: Maybe<Scalars['Boolean']>;
  defaultQuality: Maybe<Scalars['Int']>;
  failOnError: Maybe<Scalars['Boolean']>;
  output: Maybe<Scalars['String']>;
  createLinkInHead: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  short_name: Maybe<Scalars['String']>;
  start_url: Maybe<Scalars['String']>;
  background_color: Maybe<Scalars['String']>;
  theme_color: Maybe<Scalars['String']>;
  display: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  icons: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  legacy: Maybe<Scalars['Boolean']>;
  theme_color_in_head: Maybe<Scalars['Boolean']>;
  cache_busting_mode: Maybe<Scalars['String']>;
  crossOrigin: Maybe<Scalars['String']>;
  include_favicon: Maybe<Scalars['Boolean']>;
  cacheDigest: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  maxWidth: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  showCaptions: Maybe<Scalars['Boolean']>;
  markdownCaptions: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  backgroundColor: Maybe<Scalars['String']>;
  withWebp: Maybe<Scalars['Boolean']>;
  tracedSVG: Maybe<Scalars['Boolean']>;
  loading: Maybe<Scalars['String']>;
  disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  disableBgImage: Maybe<Scalars['Boolean']>;
  configDir: Maybe<Scalars['String']>;
  tsNode: Maybe<Scalars['Boolean']>;
  pathCheck: Maybe<Scalars['Boolean']>;
  allExtensions: Maybe<Scalars['Boolean']>;
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  sourceMap: Maybe<BooleanQueryOperatorInput>;
  autoLabel: Maybe<BooleanQueryOperatorInput>;
  labelFormat: Maybe<StringQueryOperatorInput>;
  cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  base64Width: Maybe<IntQueryOperatorInput>;
  stripMetadata: Maybe<BooleanQueryOperatorInput>;
  defaultQuality: Maybe<IntQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
  output: Maybe<StringQueryOperatorInput>;
  createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  short_name: Maybe<StringQueryOperatorInput>;
  start_url: Maybe<StringQueryOperatorInput>;
  background_color: Maybe<StringQueryOperatorInput>;
  theme_color: Maybe<StringQueryOperatorInput>;
  display: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  icons: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  legacy: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode: Maybe<StringQueryOperatorInput>;
  crossOrigin: Maybe<StringQueryOperatorInput>;
  include_favicon: Maybe<BooleanQueryOperatorInput>;
  cacheDigest: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  maxWidth: Maybe<IntQueryOperatorInput>;
  quality: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  showCaptions: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  withWebp: Maybe<BooleanQueryOperatorInput>;
  tracedSVG: Maybe<BooleanQueryOperatorInput>;
  loading: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  disableBgImage: Maybe<BooleanQueryOperatorInput>;
  configDir: Maybe<StringQueryOperatorInput>;
  tsNode: Maybe<BooleanQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  maxWidth: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  showCaptions: Maybe<Scalars['Boolean']>;
  markdownCaptions: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  backgroundColor: Maybe<Scalars['String']>;
  withWebp: Maybe<Scalars['Boolean']>;
  tracedSVG: Maybe<Scalars['Boolean']>;
  loading: Maybe<Scalars['String']>;
  disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  disableBgImage: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth: Maybe<IntQueryOperatorInput>;
  quality: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  showCaptions: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  withWebp: Maybe<BooleanQueryOperatorInput>;
  tracedSVG: Maybe<BooleanQueryOperatorInput>;
  loading: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  disableBgImage: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  topNavigation: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  siteUrl: Maybe<StringQueryOperatorInput>;
  phone: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  topNavigation: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 0,
  DESC = 1
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>;
  ne: Maybe<Scalars['String']>;
  in: Maybe<Array<Maybe<Scalars['String']>>>;
  nin: Maybe<Array<Maybe<Scalars['String']>>>;
  regex: Maybe<Scalars['String']>;
  glob: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  rotate: Maybe<Scalars['Int']>;
  trim: Maybe<Scalars['Float']>;
  cropFocus: Maybe<ImageCropFocus>;
  fit: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type DefaultLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type DefaultLayoutQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & Pick<Site, 'buildTime'>
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'phone' | 'email'>
    )> }
  )> }
);

export type ImprintPageQueryVariables = Exact<{
  language: Maybe<Scalars['String']>;
}>;


export type ImprintPageQuery = (
  { __typename?: 'Query' }
  & { imprint: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
  )> }
);

export type IndexPageQueryVariables = Exact<{
  language: Maybe<Scalars['String']>;
}>;


export type IndexPageQuery = (
  { __typename?: 'Query' }
  & { values: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { nodes: Array<(
      { __typename?: 'MarkdownRemark' }
      & Pick<MarkdownRemark, 'fileAbsolutePath' | 'html'>
      & { frontmatter: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatter' }
        & Pick<MarkdownRemarkFrontmatter, 'title' | 'illustration'>
      )>, fields: Maybe<(
        { __typename?: 'MarkdownRemarkFields' }
        & Pick<MarkdownRemarkFields, 'language' | 'kind'>
      )> }
    )> }
  ), references: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { nodes: Array<(
      { __typename?: 'MarkdownRemark' }
      & { frontmatter: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatter' }
        & Pick<MarkdownRemarkFrontmatter, 'title' | 'website'>
        & { logo: Maybe<(
          { __typename?: 'File' }
          & { childImageSharp: Maybe<(
            { __typename?: 'ImageSharp' }
            & { fixed: Maybe<(
              { __typename?: 'ImageSharpFixed' }
              & GatsbyImageSharpFixedFragment
            )> }
          )> }
        )> }
      )> }
    )> }
  ) }
);
