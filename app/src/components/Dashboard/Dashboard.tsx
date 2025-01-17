import { interpolateCool } from 'd3-scale-chromatic';
import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';

import { GroupChatFilters } from '../../constants/filters';
import { DEFAULT_FILTER_LIMIT } from '../../constants/index';
import { ContactFilter, IContactData } from '../Filters/ContactFilter';
import { GroupChatFilter } from '../Filters/GroupChatFilter';
import { LimitFilter } from '../Filters/LimitFilter';
import { TopFriendsChart } from '../Graphs/TopFriendsChart';
import { WordOrEmojiCountChart } from '../Graphs/WordOrEmojiCountChart';

export function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(DEFAULT_FILTER_LIMIT);
  const [groupChat, setGroupChat] = useState<GroupChatFilters>(
    GroupChatFilters.ONLY_INDIVIDUAL
  );
  const [contact, setContact] = useState<string | undefined>(undefined);

  const handleContactChange = (selected?: IContactData | null | undefined) => {
    setContact(selected?.value);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(event.target.value));
  };

  const handleGroupChatChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGroupChat(event.target.value as GroupChatFilters);
  };

  useEffect(() => {
    const init = async () => {
      await ipcRenderer.invoke('initialize-tables');
      setIsLoading(false);
    };

    init();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <LimitFilter handleChange={handleLimitChange} limit={limit} />
        <GroupChatFilter
          handleChange={handleGroupChatChange}
          groupChat={groupChat}
        />
        <ContactFilter
          contact={{
            value: contact,
          }}
          handleChange={handleContactChange}
        />
      </div>
      <WordOrEmojiCountChart
        titleText="Top Received Emojis"
        labelText="Count of Emoji"
        filters={{
          isEmoji: true,
          limit,
          isFromMe: false,
          groupChat,
          contact,
        }}
        colorInterpolationFunc={interpolateCool}
      />
      <WordOrEmojiCountChart
        titleText="Top Received Words"
        labelText="Count of Word"
        filters={{
          isEmoji: false,
          limit,
          isFromMe: false,
          groupChat,
          contact,
        }}
        colorInterpolationFunc={interpolateCool}
      />
      <TopFriendsChart
        titleText="Top Friends"
        filters={{ limit, groupChat, contact }}
        colorInterpolationFunc={interpolateCool}
      />
      <WordOrEmojiCountChart
        titleText="Top Sent Words"
        labelText="Count of Word"
        filters={{ isEmoji: false, limit, isFromMe: true, contact }}
        colorInterpolationFunc={interpolateCool}
      />
      <WordOrEmojiCountChart
        titleText="Top Sent Emojis"
        labelText="Count of Emoji"
        filters={{ isEmoji: true, limit, isFromMe: true, contact }}
        colorInterpolationFunc={interpolateCool}
      />
    </div>
  );
}
