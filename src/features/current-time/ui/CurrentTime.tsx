import { useCurrentTime } from "@/features/current-time/lib/useCurrentTime";
import { CardContainer } from "@/shared/ui/CardContainer";

const CurrentTime = () => {
  const [hours, minutes] = useCurrentTime();

  return (
    <CardContainer>
      <h1>
        {hours} : {minutes}
      </h1>
    </CardContainer>
  );
};

export default CurrentTime;
