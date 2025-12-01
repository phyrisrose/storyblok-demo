import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement, reset } from "@/store/slices/counterSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./Counter.module.scss";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Card className={styles.counterCard}>
      <CardHeader>
        <CardTitle className={styles.title}>Redux Counter</CardTitle>
        <CardDescription>State management with Redux Toolkit</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div className={styles.display}>
          <span className={styles.value}>{count}</span>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => dispatch(decrement())} variant="outline" size="lg">
            -
          </Button>
          <Button onClick={() => dispatch(reset())} variant="secondary" size="lg">
            Reset
          </Button>
          <Button onClick={() => dispatch(increment())} size="lg">
            +
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Counter;
