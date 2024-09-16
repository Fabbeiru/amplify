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
          alt="Logo"
          src={require("./Tauw.png")}
          width="75%"
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
                    alt="Logo"
                    src={require("./Tauw.png")}
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
                      <TabItem title="Fuenlabrada">
                        <br></br>
                        <iframe title="Fuenlabrada Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNDllMDljODQtNTE1OC00OTU0LWJlZTAtMGY5NWMzOGZjZDVjIiwidCI6ImYxMmZjYWNmLTM0YjEtNDk1OS1iODk3LWIxMGU0MjZkZTQzOCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                      <TabItem title="Getafe">
                        <br></br>
                        <iframe title="Getafe Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiOTAzZjk4YjgtMTczMC00N2JhLWE4YjEtOTBlZjM1MjNkMmE2IiwidCI6ImYxMmZjYWNmLTM0YjEtNDk1OS1iODk3LWIxMGU0MjZkZTQzOCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                      <TabItem title="Pozuelo">
                        <br></br>
                        <iframe title="Pozuelo Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiYjEwNzg1NjUtNjAwMS00MDlhLThlZDItYzQwNjJkMmM5ODJhIiwidCI6ImYxMmZjYWNmLTM0YjEtNDk1OS1iODk3LWIxMGU0MjZkZTQzOCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                      <TabItem title="Palacios">
                        <br></br>
                        <iframe title="Palacios Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNGY4YWQyYTEtMGE0NC00MjMyLWI4YjEtZDc1MzcwMTY5MWI1IiwidCI6ImYxMmZjYWNmLTM0YjEtNDk1OS1iODk3LWIxMGU0MjZkZTQzOCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                      <TabItem title="Aranda">
                        <br></br>
                        <iframe title="Aranda Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNDM1YTMwMmItNDgwMy00ZWY1LTllMmItMWIxODUxZmFjZGMwIiwidCI6ImYxMmZjYWNmLTM0YjEtNDk1OS1iODk3LWIxMGU0MjZkZTQzOCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                      <TabItem title="Takasago">
                        <br></br>
                        <iframe title="Takasago Report Section" width="800" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiNjk3YWMyOTktNDU0NS00NDEzLTkwMzQtYTExY2M4Nzc3MjE0IiwidCI6ImYxMmZjYWNmLTM0YjEtNDk1OS1iODk3LWIxMGU0MjZkZTQzOCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                      </TabItem>
                      {user && user.username === 'test_user' && (
                        <TabItem title="AutReportTEST">
                          <br></br>
                          <iframe title="" width="800" height="400" src="https://mybinder.org/v2/gh/Evnazx/AutoReportDORSTest/HEAD?urlpath=voila/render/ReportTest.ipynb" frameborder="0" allowFullScreen="true"></iframe>
                        </TabItem>
                      )}
                    </Tabs>
                  </section>
                  <section className='under-dev'>
                    <a href='https://soiltechs-my.sharepoint.com/:x:/g/personal/tecnico_soiltechs_es/Ee-QJvFYkYtLsFnngFPL9p4BwH98bjAQjniAwYkilNxMUQ?e=a0yubt' target='_blank' rel="noreferrer">
                      <h2>
                        Informe de mejoras o errores
                        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                      </h2>
                    </a>
                  </section>
                </main>
                <footer>Powered by Soiltechs</footer>
              </>
            )}
          </Authenticator>
        </div>
      </>
  );
}
