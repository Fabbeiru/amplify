import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  useTheme,
  Heading,
  Text,
  Tabs,
  TabItem,
  Button
} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const formFields = {
  confirmVerifyUser: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

const components = {
  VerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },

  ConfirmVerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

export default function App() {
  return (
      <div className='container'>
        <Authenticator
          formFields={formFields}
          components={components}
          hideSignUp={true}
        >
          {({ signOut, user }) => (
            <main>
              <div className='user-info'>
                <h1>{user.username}</h1>
                <Button onClick={signOut}>Sign out</Button>
              </div>
              <Tabs
                justifyContent="flex-start">
                <TabItem title="Proyecto 1">
                  <br></br>
                  <iframe title="Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNmU0NmVlNmMtZGMwZi00MjE3LWFjNTItY2EzMDJlN2ZjMDlkIiwidCI6ImIyYmI3MzFjLTQ2MGQtNDIwZi1hNDc1LTNlZDYxNWE4Mjk4NyIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
                </TabItem>
                <TabItem title="Proyecto 2">
                  <br></br>
                  <iframe title="Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNmU0NmVlNmMtZGMwZi00MjE3LWFjNTItY2EzMDJlN2ZjMDlkIiwidCI6ImIyYmI3MzFjLTQ2MGQtNDIwZi1hNDc1LTNlZDYxNWE4Mjk4NyIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
                </TabItem>
              </Tabs>
              <br></br>
            </main>
          )}
        </Authenticator>
      </div>
  );
}