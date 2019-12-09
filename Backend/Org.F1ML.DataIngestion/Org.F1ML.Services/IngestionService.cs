using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Org.F1ML.Services
{
    public class IngestionService
    {
        private readonly ILogger<IngestionService> _logger;

        IngestionService(ILogger<IngestionService> logger)
        {
            _logger = logger;
        }


        public async Task<bool> Ingest<T>(T data)
        {
            _logger.Log(LogLevel.Trace, "Ingest - START");

            
            _logger.Log(LogLevel.Trace, "Ingest - END");

            return true;
        }
    }
}
