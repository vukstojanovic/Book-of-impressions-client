import { useRouter } from 'next/router'

const QuestionText = ({ question }) => {
  const { locale } = useRouter()
  return <p>{question?.texts.filter((item) => item.key === locale)[0].text}</p>
}

export default QuestionText
