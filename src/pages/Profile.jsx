import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" variant="enclosed" >
      <TabList>
        <Tab _selected={{ color: "tomato", border: "1px solid tomato" }} >Account Info</Tab>
        <Tab _selected={{ color: "tomato", border: "1px solid tomato" }} >Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4} mt={10}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mlight@screenwriters.quest
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Exercitation quis consectetur exercitation ipsum eiusmod mollit ut cillum elit minim.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Nisi cillum adipisicing ea in sint cupidatat eu adipisicing reprehenderit occaecat est dolor.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4} mt={10}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Lorem commodo cillum ut enim aliqua sint pariatur nulla.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Amet ut mollit quis id mollit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Nostrud eu aliquip dolor consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.600" />
              Esse ipsum sunt cupidatat anim minim fugiat aliquip fugiat Lorem duis amet elit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Nulla elit magna tempor cupidatat laboris amet excepteur laboris sunt nulla cillum Lorem.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.600" />
              Reprehenderit eiusmod consequat nisi aute.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
