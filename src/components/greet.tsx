//defined structure or type of props
type GreetProps = {
  name: string;
  message: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {props.name}. You're {props.message} years old.
      </h2>
    </div>
  );
};
