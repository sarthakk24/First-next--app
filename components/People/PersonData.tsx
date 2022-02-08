const PersonData = (props: { label: string; value: string }): JSX.Element => {
  return (
    <div>
      {props.label}: {props.value}
    </div>
  );
};

export default PersonData;
