namespace EnterpriseWeb.Models.DB
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("nav")]
    public partial class nav
    {
        public int id { get; set; }

        public string title { get; set; }

        public int? sort { get; set; }

        public bool? enable { get; set; }

        public string content { get; set; }
    }
}
