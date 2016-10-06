
import {Statistic} from '../statistic';
import {Exposure} from './../../../models/index';

export class StatisticFactory {

  static createForOne(exposure: Exposure): Array<Statistic> {

    var result = new Array<Statistic>();

    result.push(new Statistic('Net Balance', exposure.netBalance, exposure.currency));
    result.push(new Statistic('Cash Position', exposure.cashPosition, exposure.currency));
    result.push(new Statistic('Security Position', exposure.securityPosition, exposure.currency));
    result.push(new Statistic('Required Margin', exposure.requiredMargin, exposure.currency));

    return result;
  }

  static createForAll(exposures: Exposure[]): Array<Statistic> {

    var result = new Array<Statistic>();

    let exposureCount = exposures.length;

    let executedCount = exposures.filter(function (exposure: Exposure) { return exposure.status == 'EXECUTED'; }).reduce(function (sum, exposure) {
      return sum + 1;
    }, 0);

    let disputedCount = exposures.filter(function (exposure: Exposure) { return exposure.status == 'DISPUTED'; }).reduce(function (sum, exposure) {
      return sum + 1;
    }, 0);

    let totalBalance = exposures.reduce(function (sum: number, exposure: Exposure) {
      return sum + exposure.netBalance;
    }, 0);

    result.push(new Statistic('Exposures', exposureCount));
    result.push(new Statistic('Net Balance', totalBalance, 'usd'));
    result.push(new Statistic('Disputed', disputedCount));
    result.push(new Statistic('Executed', executedCount));

    return result;
  }






}

