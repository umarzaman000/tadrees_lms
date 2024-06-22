import { Text, Paper } from '@mantine/core';
import { Title } from '@mantine/core';
import { useSelector } from 'react-redux';

export default function Demo() {
  const lecture = useSelector(state => state.lectureReducer.lecture);
  console.log('lecture in redux: ',lecture)
  return (
    lecture?(
    <Paper shadow="lg" radius="xl" withBorder p="xl" style={{
        marginTop:"50px",
        marginRight:"120px",
        marginLeft:"100px",
        alignSelf:"center"
        
    }}>
     <Title style={{paddingBottom:"20px"}}>{lecture?.label}</Title>
      <Text>{lecture?.link}</Text>
    </Paper>) : <Text>select your lecture</Text>
  );
}