import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import GuildRosterRow from './GuildRosterRow';

const GuildRoster = (props) => {
  const { roster } = props;

  return (
    <>
      <Table className="d-flex flex-column">
        {roster.map((player) => (
          <GuildRosterRow player={player} key={player.character.name} />
        ))}
      </Table>
      <Pagination className="pagination" size="lg clearfix">
        <PaginationItem className="paginationItem">
          <PaginationLink>
            <BsFillSkipBackwardFill />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>4</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>
            <BsFillSkipForwardFill />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </>
  );
};

GuildRoster.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  roster: propTypes.array.isRequired,
};
export default GuildRoster;
