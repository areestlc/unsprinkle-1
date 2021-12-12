import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const srcSetAvif = [
    src.replace('.jpg', '.avif 1x'),
    src.replace('.jpg', '@2x.avif 2x'),
    src.replace('.jpg', '@3x.avif 3x')
  ];

  const srcSetJpg = [
    src.replace('.jpg', '.jpg 1x'),
    src.replace('.jpg', '@2x.jpg 2x'),
    src.replace('.jpg', '@3x.jpg 3x')
  ];

  var tagList = [];
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    tagList.push(<Tag key={tag}>{tag}</Tag>);
    if (i < tags.length - 1) {
      tagList.push(<Spacer size={5} />);
    }
  }

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source 
            type="image/avif"
            srcset={srcSetAvif.join(',\r\n')}
          />
          <source 
            type="image/jpg"
            srcset={srcSetJpg.join(',\r\n')}
          />
          <Image alt="Search Result" src={src} />
        </Picture>
      </Anchor>
      <Tags>
        {tagList}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Picture = styled.picture`
`;

const Spacer = styled.div`
  min-width: ${p => p.size}px;
  display: inline-block;
`;

const Tags = styled.ul`
  flex-wrap: wrap;
  gap: 8px;
  max-width: 100%;
`;

const Tag = styled.li`
  display: inline-block;
  margin-top: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
  white-space: nowrap;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
