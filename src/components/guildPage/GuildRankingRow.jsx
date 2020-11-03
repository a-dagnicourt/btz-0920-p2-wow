import propTypes from 'prop-types';
import DalApi from '../../dal/DalApi';

const { Row, Col } = require('reactstrap');

export default function GuildRankingRow(props) {
  const {
    raid,
    raidProgress: {
      encountersDefeated: { mythic },
    },
  } = props;

  // get the raid object from staticData by DalApi to find bossQty
  const currentRaid = DalApi.getRaidBySlug(raid.raid);

  return (
    <Row>
      <Col sm="3">{currentRaid.name}</Col>
      <Col sm="1">
        {mythic.length.toString().concat('/').concat(currentRaid.bossQty)}
      </Col>
      <Col offser-sm="5" />
      <Col sm="3">{raid.factionRanks.mythic.world}</Col>
    </Row>
  );
}

GuildRankingRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  raidProgress: propTypes.object.isRequired,
  raid: propTypes.string.isRequired,
  length: propTypes.number.isRequired,
  world: propTypes.string.isRequired,
};
