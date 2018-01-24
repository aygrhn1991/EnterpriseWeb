namespace EnterpriseWeb.Models.DB
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class nav_subnav
    {
        public int id { get; set; }

        public string title { get; set; }

        public string url { get; set; }

        public int? page_id { get; set; }

        public DateTime? sys_datetime { get; set; }
    }
}
