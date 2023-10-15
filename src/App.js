import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  useTheme,
  Heading,
  Text,
  Tabs,
  TabItem,
  Button,
  View,
  Image
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
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="DORS logo"
          src={require("./DORS.png")}
        />
      </View>
    );
  },

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
      <>
        <div className='container'>
          <Authenticator
            formFields={formFields}
            components={components}
            hideSignUp={true}
          >
            {({ signOut, user }) => (
              <>
                <div className='header'>
                  <Image
                    alt="DORS mini logo"
                    src={require("./DORSMini.png")}
                  />
                  <div className='user-info'>
                    <p>{user.username}</p>
                    <Button variation="primary" size='small' onClick={signOut}>Sign out</Button>
                  </div>
                </div>
                <main>
                  <section>
                    <h2>Reports</h2>
                    <Tabs
                      justifyContent="flex-start">
                      <TabItem title="Project 1">
                        <br></br>
                        <iframe title="Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNmU0NmVlNmMtZGMwZi00MjE3LWFjNTItY2EzMDJlN2ZjMDlkIiwidCI6ImIyYmI3MzFjLTQ2MGQtNDIwZi1hNDc1LTNlZDYxNWE4Mjk4NyIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                      <TabItem title="Project 2">
                        <br></br>
                        <iframe title="Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNmU0NmVlNmMtZGMwZi00MjE3LWFjNTItY2EzMDJlN2ZjMDlkIiwidCI6ImIyYmI3MzFjLTQ2MGQtNDIwZi1hNDc1LTNlZDYxNWE4Mjk4NyIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                    </Tabs>
                  </section>
                  <section className='under-dev'>
                    <div>
                      <h2>Web Camera</h2>
                      <Image
                        className='under-icon'
                        alt="Under construction icon"
                        src={require("./pickaxe.png")}
                      />
                      <p>Currently under construction.</p>
                    </div>
                    <div>
                      <h2>Telemetry Access</h2>
                      <Image
                        className='under-icon'
                        alt="Under construction icon"
                        src={require("./pickaxe.png")}
                      />
                      <p>Currently under construction.</p>
                    </div>
                  </section>
                </main>
              </>
            )}
          </Authenticator>
        </div>
      </>
  );
}
