import * as S from './styles'

interface MainProps {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  hasBorderLeft?: boolean
}

function Main({ title, subtitle, imageSrc, imageAlt, hasBorderLeft = false }: MainProps) {
  return (
    <S.MainContainer>
      <S.Content>
        {title && <S.Title dangerouslySetInnerHTML={{ __html: title }} />}
        {subtitle && <S.SubTitle hasBorderLeft={hasBorderLeft} dangerouslySetInnerHTML={{ __html: subtitle }} />}
      </S.Content>
      <S.Image src={imageSrc} alt={imageAlt} />
    </S.MainContainer>
  )
}

export default Main
