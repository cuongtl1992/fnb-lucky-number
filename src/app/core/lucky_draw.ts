import { LuckyDrawOptions } from './lucky_draw.options';
import { LuckyNumber } from './lucky_number';

export class LuckyDraw {
    public giftWithCoints;

    constructor(private readonly options: LuckyDrawOptions) {
        this.giftWithCoints = this.generateGifts(options.coins, options.totalGift, options.coinAllocationPercentages);
    }

    private generateGifts(coins: number[], totalGifts: number, allocationPercentages: number[]): LuckyNumber[] {
        let giftsPerCoin: number[] = allocationPercentages.map(percent => Math.round(totalGifts * (percent / 100)));
    
        while (giftsPerCoin.reduce((a, b) => a + b, 0) < totalGifts) {
            giftsPerCoin[giftsPerCoin.indexOf(Math.min(...giftsPerCoin))] += 1;
        }
        while (giftsPerCoin.reduce((a, b) => a + b, 0) > totalGifts) {
            giftsPerCoin[giftsPerCoin.indexOf(Math.max(...giftsPerCoin))] -= 1;
        }
    
        let giftArray: number[] = [];
        giftsPerCoin.forEach((giftsCount, coinIndex) => {
            for (let i = 0; i < giftsCount; i++) {
                giftArray.push(coins[coinIndex]);
            }
        });
    
        this.shuffleArray(giftArray);
    
        let giftNumbers: number[] = Array.from({length: totalGifts}, (_, i) => i + 1);
    
        let giftsWithCoins: LuckyNumber[] = giftNumbers.map((giftNumber, index) => ({
            number: giftNumber,
            money: giftArray[index],
            message: index < this.options.messages.length ? this.options.messages[index] : this.options.messages[parseInt((Math.random() * (this.options.messages.length - 0) + 0).toString())]
        }));
    
        this.shuffleArray(giftsWithCoins);

        return giftsWithCoins;
    }
    
    private shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}