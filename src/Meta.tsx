export function Meta() {
  const post = {
    title: 'Meta Component!',
    keywords: 'greeting, start'
  }

  /**
   * @description
   * 이제 컴포넌트 어디서든 meta 태그를 사용할 수 있습니다.
   * React가 이 구성 요소를 렌더링할 때 <title> <link> 및 <meta> 태그를 확인하고 자동으로 문서의 <head> 섹션에 끌어올립니다.
   * 때에 따라서 react-helmet 을 사용할 필요가 있습니다.
   * @see https://react.dev/blog/2024/04/25/react-19#support-for-metadata-tags
   */
  return (
    <article>
    <h4>{post.title}</h4>
    <title>{post.title}</title>
    <meta name="author" content="Josh" />
    <link rel="author" href="https://twitter.com/joshcstory/" />
    <meta name="keywords" content={post.keywords} />
    <p>
      Eee equals em-see-squared...
    </p>
  </article>
  )
}