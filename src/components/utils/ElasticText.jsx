function ElasticText(props) {
  const { text, className, ...rest } = props;
  const [textWidth, setTextWidth] = useState(0);

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.clientWidth);
    }
  }, [textRef]);

  return (
    <div
      className={className}
      style={{ width: textWidth }}
      ref={textRef}
      {...rest}
    >
      {text}
    </div>
  );
}

export default ElasticText;