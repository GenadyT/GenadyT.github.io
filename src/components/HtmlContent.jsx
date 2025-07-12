export default function HtmlContent({ htmlString, className }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} className={className} />
  );
}