import * as React from 'react';
import styles from './Subscribe.module.scss';
import { ISubscribeProps } from './ISubscribeProps';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Mail' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};


export const Subscribe: React.FunctionComponent<ISubscribeProps> = (props: ISubscribeProps) => {
  const [txtValue, setTxtValue] = React.useState("");
  return (
    <div className={styles.subscribe}>
      <div className={styles.container}>
        <span className={styles.title}>Stay informed!</span>
        <p className={styles.subTitle}>Subscribe to a mailing list to get the latest updates.</p>
        <Stack {...columnProps}>
          <TextField label="Your email" defaultValue={props.current_user}
            onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => { setTxtValue(newValue); }} iconProps={iconProps} />
          <PrimaryButton text="Subscribe" />
        </Stack>
      </div>
    </div>
  );

};
