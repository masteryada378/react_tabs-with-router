import React from 'react';
import { Link } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';

interface Props {
  tabs: TabType[];
  selectedTabId: string | undefined;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={selectedTabId === tab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
