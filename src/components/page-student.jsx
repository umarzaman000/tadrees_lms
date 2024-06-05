import { Text, Paper } from '@mantine/core';
import { Title } from '@mantine/core';
export default function Demo() {
  return (
    <Paper shadow="lg" radius="xl" withBorder p="xl" style={{
        marginTop:"50px",
        marginRight:"120px",
        marginLeft:"100px",
        alignSelf:"center"
        
    }}>
     <Title style={{paddingBottom:"20px"}}>Lecture:</Title>
      <Text>
      Lectures are oral presentations given by an instructor who stands at the front of the class and delivers information. Lectures are typically characterized by a unidirectional flow of information from instructor to students; hence, they may be best suited to disciplines and courses where there is a lot of ground to cover (e.g., the history and background of a topic, a large number of theories or equations). In a comprehensive volume on the utility of lectures, Bligh (2000) determined that lectures are a suitable method of instruction when the pedagogical goal is to impart information (they are not a good method for changing students’ attitudes or behaviors). Although Bligh’s review of the literature determined that lectures are just as good as other instructional methods (e.g., inquiry projects, self-guided reading) when the goal is to transmit information, he also noted that lectures are no better than these methods. In spite of six decades of research indicating that lectures are often not the optimal instructional method, lectures nevertheless remain the most popular teaching method at the university level worldwide (Bligh, 2000).
      </Text>
    </Paper>
  );
}