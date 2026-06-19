export const PROJECT_QUERY = `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    link,
    githubUrl,
    technologies,
    highlight,
    startDate,
    endDate,
    slug,
    body,
    challenges,
    files[]{
      title,
      file{
        asset->{
          url,
          originalFilename
        }
      }
    },
    gallery,
    coverImage,
    featuredMedia
  }
`;