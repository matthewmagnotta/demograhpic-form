import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    button: {
      width: '80vw',
      maxWidth: '25rem',
      margin: '1.5rem 0',
      height: '5rem',
      background: '#613395',
      color: '#fff',

      '&:hover': {
        // dark purple
        background: '#290132',
      },
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
  };
});
const Programs = (props) => {
  const { programs, setStep, setValues, values } = props;

  const classes = useStyles();

  const handleProgramClick = (program) => {
    setStep(2);
    setValues({ ...values, selected_plan: program.Code });
  };

  return (
    <div>
      <span className={classes.title}>
        Please select ONE of the goverment programs you are enrolled in below.
      </span>

      {programs.map((program, index) => {
        return (
          <div>
            <Button
              variant="contained"
              key={index}
              className={classes.button}
              onClick={() => handleProgramClick(program)}
              value={program.Code}
            >
              <span>{program.Description}</span>
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default Programs;