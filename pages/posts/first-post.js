import Link from 'next/link';
import withTransition from "../../HOC/withTransition";
import Body from '../../components/body';

function FirstPost() {
  return (
    <>
      <Body>
        <h1>First Post</h1>
        
      </Body>
    </>
  );
}

export default withTransition(FirstPost);