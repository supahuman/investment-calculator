import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  private investmentService = inject(InvestmentResultsService);

  get results() {
    return this.investmentService.resultsData;
  }
}
