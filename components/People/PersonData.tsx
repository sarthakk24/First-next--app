const PersonData = (props: { label: string; value: string }): JSX.Element => {
  return (
    <div>
      <span style={{ fontWeight: 600 }}>{props.label}</span>: {props.value}
    </div>
  );
};

export default PersonData;
